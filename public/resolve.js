/* Busca el audio (preview de 30 s) de una canción en la API pública de iTunes.
   Se usa en el navegador y también en tools/validate.js (Node) para chequear el catálogo. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MQ = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' y ').replace(/[^\p{L}\p{N} ]/gu, ' ').replace(/\s+/g, ' ').trim();
  const rkey = song => norm(song.a) + '|' + norm(song.t);

  // versiones que NO queremos (en vivo, karaoke, covers…): casi siempre se descartan
  const HARD = /\b(live|en vivo|karaoke|instrumental|cover|tribute|sped up|slowed|acoustic|acustico|unplugged|demo|ringtone|8d|originally performed|music box)\b|原曲歌手|カラオケ|オルゴール|ガイド無し/;
  // variantes aceptables si no hay otra cosa (remix, edición, etc.): penalización leve
  const SOFT = /\b(remix|mix|version|edit|reprise)\b/;
  const REMASTER = /\b(remaster|remasterizado|remastered|deluxe)\b/;

  // puntaje de un resultado de iTunes frente a la canción buscada (-1 = descartar)
  function score(r, song) {
    if (!r.previewUrl || !r.trackName) return -1;
    const A = norm(song.a), T = norm(song.t), ra = norm(r.artistName), rt = norm(r.trackName);
    if (!A || !T) return -1;
    const artistOK = !!ra && (ra.includes(A) || A.includes(ra)) || (A.length > 5 && ra.split(' ').some(w => w.length > 4 && A.includes(w)) && ra.split(' ')[0] === A.split(' ')[0]);
    if (!artistOK) return -1;
    let s;
    if (rt === T) s = 100;
    else if (rt.startsWith(T + ' ')) s = 80;
    else if (T.length > 3 && rt.includes(T)) s = 55;
    else if (T.length > 6 && T.includes(rt) && rt.length > 5) s = 45;
    else return -1;
    const tRem = REMASTER.test(T);
    if (!HARD.test(T) && HARD.test(rt)) s -= 70;
    if (!SOFT.test(T) && SOFT.test(rt)) s -= 45;
    if (!tRem && REMASTER.test(rt)) s -= 6;
    if (ra === A) s += 6;
    return s;
  }

  // devuelve { r, s } con el mejor resultado y su puntaje (r = null si ninguno alcanza)
  function bestScored(results, song) {
    let top = null, ts = 0;
    (results || []).forEach(r => { const s = score(r, song); if (s > ts) { ts = s; top = r; } });
    return ts >= 40 ? { r: top, s: ts } : { r: null, s: 0 };
  }
  function best(results, song) { return bestScored(results, song).r; }

  function pack(r) {
    return {
      u: r.previewUrl,
      y: r.releaseDate ? +r.releaseDate.slice(0, 4) : 0,
      i: (r.artworkUrl100 || '').replace('100x100bb', '600x600bb'),
      l: r.trackViewUrl || '',
      n: r.trackName, p: r.artistName
    };
  }

  const url = (term, country, limit) =>
    'https://itunes.apple.com/search?media=music&entity=song&limit=' + (limit || 15) +
    '&country=' + country + '&term=' + encodeURIComponent(term);

  // fetchJson(url) -> Promise<{results:[]}>  (lo inyecta quien llama: fetch en el navegador, https en Node)
  async function find(song, fetchJson) {
    // se prueban las tiendas AR, US y JP (los openings originales figuran con nombre y título en japonés)
    // y se corta apenas aparece una coincidencia casi exacta; si no, se queda con la mejor de todas.
    let top = null, ts = 0;
    for (const country of ['AR', 'US', 'JP']) {
      try {
        const d = await fetchJson(url(song.a + ' ' + song.t, country, 15));
        const b = bestScored(d && d.results, song);
        if (b.r && b.s > ts) { top = b.r; ts = b.s; }
        if (ts >= 95) break;
      } catch (e) { /* red caída o límite: se intenta el siguiente */ }
    }
    return top ? pack(top) : null;
  }

  return { norm, rkey, score, best, bestScored, pack, url, find };
});
