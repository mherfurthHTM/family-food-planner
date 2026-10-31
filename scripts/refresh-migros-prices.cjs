/**
 * Aktualisiert nur kuratierte Migros-Produkt-IDs.
 * Kein blindes Matching von Suchtreffern und keine Login-Daten.
 * Angebote sind Migros-Onlinepreise, keine bestätigten Filialpreise.
 */
const fs=require('node:fs');
const {MigrosAPI}=require('migros-api-wrapper');
const OUT='migros-prices.json';
const MAPPING_FILE='migros-mappings.json';
const cfg=JSON.parse(fs.readFileSync(MAPPING_FILE,'utf8'));
if(cfg.schemaVersion!==1||!cfg.products||typeof cfg.products!=='object')throw Error('Ungültige Produktzuordnungen');
const ITEMS=Object.entries(cfg.products).map(([id,m])=>({id,...m}));
if(ITEMS.length<40)throw Error('Zu wenige kuratierte Produkte: '+ITEMS.length);
const normal=s=>String(s||'').trim().toLocaleLowerCase('de-CH').replace(/\s+/g,' ');
function numberFromPrice(raw){
 if(typeof raw==='number')return Number.isFinite(raw)&&raw>0?raw:null;
 if(raw==null)return null;
 let s=String(raw).replace(/\s|CHF|Fr\./gi,'').replace(/[^\d.,]/g,'');
 if(s.includes(',')&&s.includes('.')){const pos=Math.max(s.lastIndexOf(','),s.lastIndexOf('.'));s=s.slice(0,pos).replace(/[.,]/g,'')+'.'+s.slice(pos+1);}
 else s=s.replace(',','.');
 if(!/^\d+(?:\.\d{1,2})?$/.test(s))return null;
 const v=Number(s);
 return Number.isFinite(v)&&v>0&&v<1000?Math.round(v*100)/100:null;
}
function quantityInUnit(q,unit){
 const s=String(q||'').toLocaleLowerCase('de-CH').replace(/\s/g,'').replace(/,/g,'.');
 const m=s.match(/^(?:(\d+)x)?(\d+(?:\.\d+)?)(kg|g|l|ml|stück|stk\.?)$/);
 if(!m)return null;
 const count=Number(m[1]||1),n=Number(m[2]),t=m[3];
 if(unit==='g'&&(t==='g'||t==='kg'))return count*n*(t==='kg'?1000:1);
 if(unit==='ml'&&(t==='ml'||t==='l'))return count*n*(t==='l'?1000:1);
 if(unit==='Stk.'&&(t==='stück'||t.startsWith('stk')))return count*n;
 return null;
}
function previousItems(){
 try{const x=JSON.parse(fs.readFileSync(OUT,'utf8'));return x?.items&&typeof x.items==='object'?x.items:{};}
 catch{return {};}
}
async function main(){
 for(const item of ITEMS)if(!/^\d{12,}$/.test(item.migrosId)||!item.nameContains||!(item.pack>0)||!['g','ml','Stk.'].includes(item.unit))throw Error('Ungültige Artikelzuordnung: '+item.id);
 const client=new MigrosAPI();
 const tokenData=await client.account.oauth2.loginGuestToken();
 if(!tokenData?.token)throw Error('Kein Migros-Gasttoken');
 const old=previousItems(),next={...old};
 let changed=0,missing=0;
 for(let pos=0;pos<ITEMS.length;pos+=15){
  const block=ITEMS.slice(pos,pos+15);
  let rows=[];
  try{
   const res=await client.products.productDisplay.getProductDetails({migrosIds:block.map(x=>x.migrosId).join(',')},tokenData.token);
   rows=Array.isArray(res)?res:(Array.isArray(res?.products)?res.products:[]);
  }catch(e){console.log('Migros-Produktantwort nicht erreichbar: '+String(e).slice(0,200));missing+=block.length;continue;}
  for(const item of block){
   const product=rows.find(p=>String(p?.migrosId||'')===item.migrosId);
   if(!product){console.log(item.id+': Artikel nicht gefunden');missing++;continue;}
   const name=normal(product.name||product.title||product.productInformation?.mainInformation?.name);
   if(!name.includes(normal(item.nameContains))){console.log(item.id+': Produktname abweichend ('+name+')');missing++;continue;}
   const actualQuantity=String(product.offer?.quantity||'').toLocaleLowerCase('de-CH').replace(/\s/g,'');
   const pack=item.physicalQuantity?item.pack:quantityInUnit(product.offer?.quantity,item.unit);
   if((item.physicalQuantity&&actualQuantity!==String(item.physicalQuantity).toLocaleLowerCase('de-CH').replace(/\s/g,''))||pack!==item.pack){console.log(item.id+': Packungsinhalt geändert ('+product.offer?.quantity+')');missing++;continue;}
   const price=numberFromPrice(product.offer?.price?.advertisedDisplayValue);
   if(price==null){console.log(item.id+': Preis fehlt');missing++;continue;}
   const prev=old[item.id];
   if(prev?.pack===pack&&prev?.price>0&&(price>prev.price*3||price<prev.price/3)){
    console.log(item.id+': Preissprung überprüfen');missing++;continue;
   }
   next[item.id]={
    name:String(product.name||product.title||item.id).slice(0,150),
    migrosId:item.migrosId,price,pack,unit:item.unit,
    ...(item.weighed?{weighed:true}:{}),
    url:'https://www.migros.ch/de/product/'+item.migrosId,
    checkedAt:new Date().toISOString(),source:'migros-unofficial'
   };
   changed++;
  }
  console.log('Geprüft: '+Math.min(pos+15,ITEMS.length)+' / '+ITEMS.length);
 }
 if(changed===0)throw Error('Kein Preis gültig. Vorhandene Daten bleiben erhalten');
 fs.writeFileSync(OUT,JSON.stringify({schemaVersion:1,store:'Migros MM Herzogenbuchsee',storePricesVerified:false,items:next},null,2)+'\n');
 console.log('Migros-Webpreise aktualisiert: '+changed+' / '+ITEMS.length+'; ohne neuen Preis: '+missing+' (nicht ungeprüft überschrieben).');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
