/* Busca el audio (preview de 30 s) de una canción en la API pública de iTunes.
   Se usa en el navegador y también en tools/validate.js (Node) para chequear el catálogo. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MQ = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' y ').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const rkey = song => norm(song.a) + '|' + norm(song.t);

  const BAD = /\b(live|en vivo|karaoke|instrumental|cover|tribute|sped up|slowed|acoustic|acustico|unplugged|demo|remix|mix|version|edit|reprise|ringtone|8d)\b/;
  const REMASTER = /\b(remaster|remasterizado|remastered|deluxe)\b/;

  // puntaje de un resultado de iTunes frente a la canción buscada (-1 = descartar)
  function score(r, song) {
    if (!r.previewUrl || !r.trackName) return -1;
    const A = norm(song.a), T = norm(song.t), ra = norm(r.artistName), rt = norm(r.trackName);
    if (!A || !T) return -1;
    const artistOK = ra.includes(A) || A.includes(ra) || (A.length > 5 && ra.split(' ').some(w => w.length > 4 && A.includes(w)) && ra.split(' ')[0] === A.split(' ')[0]);
    if (!artistOK) return -1;
    let s;
    if (rt === T) s = 100;
    else if (rt.startsWith(T + ' ')) s = 80;
    else if (T.length > 3 && rt.includes(T)) s = 55;
    else if (T.length > 6 && T.includes(rt) && rt.length > 5) s = 45;
    else return -1;
    const tBad = BAD.test(T), tRem = REMASTER.test(T);
    if (!tBad && BAD.test(rt)) s -= 45;
    if (!tRem && REMASTER.test(rt)) s -= 6;
    if (ra === A) s += 6;
    return s;
  }

  function best(results, song) {
    let top = null, ts = 0;
    (results || []).forEach(r => { const s = score(r, song); if (s > ts) { ts = s; top = r; } });
    return ts >= 40 ? top : null;
  }

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
    for (const country of ['AR', 'US']) {
      try {
        const d = await fetchJson(url(song.a + ' ' + song.t, country, 15));
        const r = best(d && d.results, song);
        if (r) return pack(r);
      } catch (e) { /* red caída o límite: se intenta el siguiente */ }
    }
    return null;
  }

  return { norm, rkey, score, best, pack, url, find };
});
