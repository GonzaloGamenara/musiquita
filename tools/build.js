// Arma el catálogo publicable: toma tools/data.full.js (lista completa) y deja en public/data.js
// solo las canciones que ya tienen audio confirmado en tools/.resolved-cache.json.
// Además escribe public/resolved.json. Correr después de (o durante) tools/validate.js.
const fs = require('fs'), path = require('path');
const MQ = require('../public/resolve.js');
const cache = JSON.parse(fs.readFileSync(path.join(__dirname, '.resolved-cache.json'), 'utf8'));
const full = fs.readFileSync(path.join(__dirname, 'data.full.js'), 'utf8').split('\n');
let kept = 0, dropped = 0, pending = 0;
const out = full.filter(line => {
  if (!/^[^\s].*\|.+$/.test(line) || /^(const|add|window|\/\*|\(function|\}\)|R\.push)/.test(line)) return true;
  const [a, ...t] = line.split('|');
  const k = MQ.rkey({ a: a.trim(), t: t.join('|').trim() });
  if (!(k in cache)) { pending++; return false; }
  if (cache[k]) { kept++; return true; }
  dropped++; return false;
});
fs.writeFileSync(path.join(__dirname, '..', 'public', 'data.js'), out.join('\n'));
const ok = {}; Object.keys(cache).forEach(k => { if (cache[k]) ok[k] = cache[k]; });
fs.writeFileSync(path.join(__dirname, '..', 'public', 'resolved.json'), JSON.stringify(ok));
console.log(`catálogo: ${kept} con audio · ${dropped} sin audio (descartadas) · ${pending} todavía sin validar`);
