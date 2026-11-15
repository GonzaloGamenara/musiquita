// Chequea cada canción del catálogo contra iTunes, guarda el audio/tapa/año en public/resolved.json
// (la poda del catálogo la hace tools/build.js).
//
// Uso:   node tools/validate.js   (retoma donde quedó si se corta; después correr  node tools/build.js)
// En redes con proxy:  NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/ruta/ca.crt node tools/validate.js
const fs = require('fs'), path = require('path');
const MQ = require('../public/resolve.js');
const root = path.join(__dirname, '..', 'public');
global.window = {};
require(path.join(__dirname, 'data.full.js'));
const CATS = window.MUSIQUITA_CATS; // (se lee de tools/data.full.js: el catálogo completo)

const cacheFile = path.join(__dirname, '.resolved-cache.json');
const cache = fs.existsSync(cacheFile) ? JSON.parse(fs.readFileSync(cacheFile, 'utf8')) : {};
const sleep = ms => new Promise(r => setTimeout(r, ms));
let calls = 0;
// si una canción tiene "=> Artista|Título" en data.full.js, se busca esa versión exacta en iTunes
const tgt = s => s.ta ? { a: s.ta, t: s.tt } : s;

async function fetchJson(u) {
  for (let attempt = 0; attempt < 5; attempt++) {
    calls++;
    await sleep(attempt ? 4000 * attempt : (+process.env.DELAY || 3300));
    const res = await fetch(u);
    if (res.ok) { const t = await res.text(); try { return JSON.parse(t); } catch (e) { return { results: [] }; } }
    if (res.status === 403 || res.status === 429) { console.log('  límite de iTunes, espero…'); await sleep(20000 * (attempt + 1)); continue; }
    return { results: [] };
  }
  return { results: [] };
}

function snapshot() {
  const ok = {}; Object.keys(cache).forEach(k => { if (cache[k]) ok[k] = cache[k]; });
  fs.writeFileSync(path.join(root, 'resolved.json'), JSON.stringify(ok));
}

(async () => {
  const songs = new Map();
  CATS.forEach(c => c.items.forEach(it => songs.set(MQ.rkey(it), it)));
  console.log('canciones únicas:', songs.size, '· ya resueltas:', Object.keys(cache).length);
  // 1) una búsqueda por artista (hasta 200 temas) resuelve muchas canciones de una
  const byArtist = new Map();
  songs.forEach((s, k) => { if (!(k in cache)) { const A = tgt(s).a; if (!byArtist.has(A)) byArtist.set(A, []); byArtist.get(A).push([k, s]); } });
  let n = 0;
  for (const [artist, list] of byArtist) {
    n++;
    if (list.length >= 3) {
      const d = await fetchJson(MQ.url(artist, 'AR', 200));
      list.forEach(([k, s]) => { const r = MQ.best(d.results, tgt(s)); if (r) cache[k] = MQ.pack(r); });
    }
    for (const [k, s] of list) {
      if (cache[k]) continue;
      cache[k] = (await MQ.find(tgt(s), fetchJson)) || 0;
    }
    fs.writeFileSync(cacheFile, JSON.stringify(cache));
    if (n % 10 === 0) { snapshot(); console.log(`artistas ${n}/${byArtist.size} · llamadas ${calls}`); }
  }
  const ok = {}, missing = [];
  songs.forEach((s, k) => { if (cache[k]) ok[k] = cache[k]; else missing.push(s.a + ' | ' + s.t); });
  fs.writeFileSync(path.join(root, 'resolved.json'), JSON.stringify(ok));
  fs.writeFileSync(path.join(__dirname, 'missing.txt'), missing.join('\n') + '\n');
  console.log('encontradas:', Object.keys(ok).length, '· sin audio:', missing.length);

})();
