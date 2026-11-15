// Arma el catálogo publicable: toma tools/data.full.js (lista completa de candidatas) y deja en public/data.js
// solo las canciones que ya tienen audio confirmado en tools/.resolved-cache.json.
// Los géneros con menos de MIN_PER_GENRE canciones confirmadas se ocultan hasta que se completen.
// También escribe public/resolved.json. Correr después de (o durante) tools/validate.js.
const fs = require('fs'), path = require('path');
const MQ = require('../public/resolve.js');
const MIN_PER_GENRE = 5;

const cache = JSON.parse(fs.readFileSync(path.join(__dirname, '.resolved-cache.json'), 'utf8'));
global.window = {};
require('./data.full.js');
const full = window.MUSIQUITA_CATS;

let kept = 0, dropped = 0, pending = 0;
const hidden = [], cats = [];
full.forEach(c => {
  const items = c.items.filter(it => {
    const k = MQ.rkey(it);
    if (!(k in cache)) { pending++; return false; }
    if (cache[k]) return true;
    dropped++; return false;
  });
  if (items.length < MIN_PER_GENRE) { hidden.push(`${c.name} (${items.length})`); return; }
  kept += items.length;
  cats.push({ ...c, items });
});

const body = cats.map(c =>
  `  add(${JSON.stringify(c.id)}, ${JSON.stringify(c.emoji)}, ${JSON.stringify(c.name)}, \`\n` +
  c.items.map(i => `${i.a}|${i.t}`).join('\n') + '\n`);\n').join('\n');

const out = `/* Catálogo de Musiquita (GENERADO por tools/build.js — no editar a mano).
   Para agregar canciones: editá tools/data.full.js, corré tools/validate.js y después tools/build.js.
   Una canción por línea:  Artista|Canción  */
(function () {
  const R = [];
  const add = (id, emoji, name, text) =>
    R.push({
      id, emoji, name,
      items: text.trim().split('\\n').map(l => l.trim()).filter(Boolean).map(l => {
        const [a, ...t] = l.split('|');
        return { a: a.trim(), t: t.join('|').trim() };
      })
    });

${body}
  window.MUSIQUITA_CATS = R;
})();
`;
fs.writeFileSync(path.join(__dirname, '..', 'public', 'data.js'), out);

const ok = {};
Object.keys(cache).forEach(k => { if (cache[k]) ok[k] = cache[k]; });
fs.writeFileSync(path.join(__dirname, '..', 'public', 'resolved.json'), JSON.stringify(ok));
console.log(`catálogo: ${kept} con audio en ${cats.length} géneros · ${dropped} sin audio (descartadas) · ${pending} todavía sin validar`);
if (hidden.length) console.log('géneros ocultos por ahora:', hidden.join(', '));
