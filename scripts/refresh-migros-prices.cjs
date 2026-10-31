/**
 * Kostenloser Migros-Preistest für bekannte Produkt-IDs.
 * Kein Migros-Login; nur frei zugängliche, inoffizielle Endpunkte.
 * Niemals aus Suchergebnissen automatisch beliebige Treffer zuordnen.
 * Kein aktualisierter Preis -> vorherige Daten bleiben (mit altem Zeitstempel).
 */
const fs = require('node:fs');
const { MigrosAPI } = require('migros-api-wrapper');

const OUT = 'migros-prices.json';
const ITEMS = [
  {id:'oats',migrosId:'104202100000',nameWord:'haferflocken'},
  {id:'milk',migrosId:'204016100000',nameWord:'milch'},
  {id:'eggs',migrosId:'196025001000',nameWord:'eier'},
  {id:'rice',migrosId:'104415300000',nameWord:'reis'},
  {id:'quark',migrosId:'200803100000',nameWord:'quark'},
  {id:'carrot',migrosId:'274502502400',nameWord:'karotten'}
];

function priceToNumber(raw) {
  if (typeof raw === 'number') return Number.isFinite(raw) && raw > 0 ? raw : null;
  if (raw == null) return null;
  let t = String(raw).replace(/\s|CHF|Fr\./gi,'').replace(/[^\d.,]/g,'');
  if (t.includes(',') && t.includes('.')) {
    // Der letzte Trenner ist das Dezimalzeichen; andere sind Tausendertrenner.
    const sep = Math.max(t.lastIndexOf(','),t.lastIndexOf('.'));
    t = t.slice(0,sep).replace(/[.,]/g,'')+'.'+t.slice(sep+1);
  } else t = t.replace(',','.');
  if (!/^\d+(?:\.\d{1,2})?$/.test(t)) return null;
  const num = Number(t);
  return Number.isFinite(num) && num > 0 && num < 1000 ? Math.round(num*100)/100 : null;
}
function safeName(product) {
  return String(product.name||product.title||product.productInformation?.mainInformation?.name||'').toLocaleLowerCase('de-CH');
}
function readExisting() {
  try {const x=JSON.parse(fs.readFileSync(OUT,'utf8'));return x&&typeof x==='object'&&x.items&&typeof x.items==='object'?x.items:{};}
  catch {return {};}
}
async function main() {
  const client = new MigrosAPI();
  const tokenInfo = await client.account.oauth2.loginGuestToken();
  if (!tokenInfo?.token) throw Error('Migros-Gasttoken nicht verfügbar');
  const old = readExisting();
  const next = {...old};
  let changed = 0;
  // Kleine, gezielte Abfrage: kein Komplettdownload des Sortiments.
  const raw = await client.products.productDisplay.getProductDetails({migrosIds:ITEMS.map(x=>x.migrosId).join(',')},tokenInfo.token);
  const products = Array.isArray(raw) ? raw : (Array.isArray(raw?.products) ? raw.products : []);
  for (const item of ITEMS) {
    const product = products.find(p=>String(p?.migrosId||'')===item.migrosId);
    if (!product) {console.log(item.id+': keine Produktantwort');continue;}
    const name=safeName(product);
    if (!name.includes(item.nameWord)) {console.log(item.id+': unklarer Produktname '+name);continue;}
    const price=priceToNumber(product.offer?.price?.advertisedDisplayValue);
    if (price===null) {console.log(item.id+': kein gültiger Preis');continue;}
    const previous=next[item.id];
    // Keine offensichtlich falschen Werte/Einheiten in die App schreiben.
    if (previous?.price && (price > previous.price * 3 || price < previous.price/3)) {
      console.log(item.id+': grosse Abweichung, manuellen Abgleich nötig');continue;
    }
    next[item.id]={
      name:String(product.name||product.title||item.id).slice(0,150),
      migrosId:item.migrosId,price,
      url:'https://www.migros.ch/de/product/'+item.migrosId,
      checkedAt:new Date().toISOString(),
      source:'migros-unofficial'
    };
    changed++;
  }
  if (changed===0) throw Error('Kein einziger Preis verifiziert; vorhandene Datei bleibt unverändert');
  fs.writeFileSync(OUT,JSON.stringify({schemaVersion:1,store:'Migros MM Herzogenbuchsee',storePricesVerified:false,items:next},null,2)+'\n');
  console.log('Aktualisierte Migros-Onlinepreise: '+changed+' / '+ITEMS.length+'. Filialpreise ungeprüft.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
