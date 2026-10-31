/**
 * Produktkatalog-Discovery: sammelt zur manuellen Zuordnung konkrete Migros-Treffer.
 * KEINE automatische Auswahl nur aufgrund des Namens.
 */
const fs=require('node:fs');
const {MigrosAPI}=require('migros-api-wrapper');
const html=fs.readFileSync('index.html','utf8');
const block=html.split('const P = [')[1]?.split('];')[0];
if(!block)throw Error('Produktkatalog nicht gefunden');
const catalog=[...block.matchAll(/\['([^']+)','([^']+)',(\d+),'([^']+)',(\d+(?:\.\d+)?),'([^']+)'\]/g)]
 .map(m=>({id:m[1],name:m[2],pack:Number(m[3]),unit:m[4]}));
if(catalog.length<45)throw Error('Produktkatalog unvollständig: '+catalog.length);
const aliases={
 yogurt:'Nature Joghurt',berries:'Beeren tiefgekühlt',peanut:'Erdnussbutter',
 kidney:'Kidney Bohnen',chickpea:'Kichererbsen',tinnedtomato:'Tomaten gehackt',corn:'Zuckermais',salt:'Jodsalz',
 passata:'Passierte Tomaten',tinnedtomato:'Tomaten gehackt Dose',chicken:'Poulet Brust',
 mince:'Rindshackfleisch',tuna:'Thon nature',salmon:'Lachsfilet',
 pepper:'Peperoni',pepperground:'Pfeffer gemahlen',cream:'Vollrahm',
 jam:'Konfitüre Erdbeere',herbs:'Kräuter italienische',broth:'Gemüse Bouillon',
 peas:'Erbsen tiefgekühlt',spinach:'Blattspinat tiefgekühlt',
 bread:'Ruchbrot',oil:'Rapsöl',cheese:'Reibkäse',
 tuna:'Thon in Wasser',tortilla:'Tortilla Weizen',tomato:'Tomaten frisch',
 salad:'Kopfsalat',broccoli:'Broccoli frisch',lentils:'Linsen rot'
};
const api=new MigrosAPI();
const sleep=t=>new Promise(ok=>setTimeout(ok,t));
function chf(raw){
 if(raw===undefined||raw===null)return null;
 const v=Number(String(raw).replace(/CHF/gi,'').trim().replace(',','.'));
 return Number.isFinite(v)&&v>0&&v<1000?v:null;
}
function describe(p){
 const offer=p.offer||{};
 const main=p.productInformation?.mainInformation||{};
 const quantity=offer.quantity;
 return {
  uid:String(p.uid||''), migrosId:String(p.migrosId||''), name:String(p.name||p.title||''),
  price:chf(offer.price?.advertisedDisplayValue),
  priceUnit:offer.price?.unitPrice||null, quantity:quantity||null,
  subTitle:main.subTitle||main.subtitle||null,
  content:main.content||main.quantity||main.netWeight||null,
  isAvailable:p.productAvailability?.isAvailable??null,
  url:p.migrosId?'https://www.migros.ch/de/product/'+p.migrosId:null
 };
}
async function main(){
 const t=await api.account.oauth2.loginGuestToken();
 if(!t?.token)throw Error('Kein Migros Gasttoken');
 const token=t.token;
 const items=[], all=[];
 for(const p of catalog){
  const q=aliases[p.id]||p.name;
  try{
   const result=await api.products.productSearch.searchProduct({query:q,language:'de'},{},token);
   const ids=(result.productIds||[]).slice(0,8).map(String);
   items.push({...p,query:q,ids});
   all.push(...ids);
   console.log(p.id+': '+ids.length+' Suchtreffer (max. 5)');
  }catch(e){
   console.log(p.id+': Suche fehlgeschlagen: '+String(e).slice(0,140));
   items.push({...p,query:q,ids:[],error:'search-failed'});
  }
  await sleep(125);
 }
 const ids=[...new Set(all)];
 const details=new Map();
 for(let i=0;i<ids.length;i+=15){
  const batch=ids.slice(i,i+15);
  try{
   const result=await api.products.productDisplay.getProductDetails({uids:batch},token);
   const rows=Array.isArray(result)?result:(Array.isArray(result?.products)?result.products:[]);
   for(const p of rows)details.set(String(p.uid),describe(p));
   console.log('Details: '+Math.min(i+15,ids.length)+' / '+ids.length);
  }catch(e){console.log('Details failed '+i+': '+String(e).slice(0,160));}
  await sleep(125);
 }
 const results=items.map(({ids,...rest})=>({...rest,candidates:ids.map(x=>details.get(x)).filter(Boolean)}));
 fs.writeFileSync('migros-candidates.json',JSON.stringify({schema:1,generatedAt:new Date().toISOString(),warning:'Ungeprüfte Produktvorschläge. Keine automatische Übernahme.',products:results},null,2)+'\n');
 console.log('Recherche vollständig: '+catalog.length+' Zutaten, '+results.filter(x=>x.candidates.length).length+' mit Trefferdetails.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
