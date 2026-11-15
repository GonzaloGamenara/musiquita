(() => {
  'use strict';

  /* ======================================================================
     Musiquita · app.js
     Vanilla JS, sin dependencias. Estado en localStorage.
     El audio sale de los previews de 30 s de la API pública de iTunes.
     ====================================================================== */

  const CATS = window.MUSIQUITA_CATS || [];
  const MQ = window.MQ;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rand = n => Math.floor(Math.random() * n);
  const sum = a => a.reduce((x, y) => x + y, 0);
  const fmtN = n => n.toLocaleString('es-AR');
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = rand(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const KEY = 'musiquita:v1';
  const PC = ['#ef5b5f', '#f6b40e', '#35b47b', '#4a8fd4', '#a56cf0', '#ff8a3d', '#1fbfae', '#ee5fa7', '#8bc34a', '#8d99ae', '#18a8d8', '#c28b2c'];
  const MAX_PLAYERS = 12;
  const PREVIEW_MAX = 29; // los previews de iTunes duran ~30 s

  const OPT = {
    rounds: [5, 10, 15, 20, 30, 0],
    clipSec: [3, 5, 8, 10, 15, 20, 30],
    answerSec: [5, 8, 10, 15, 20, 30]
  };
  const CLIP_PRESETS = [5, 10, 20, 30];

  /* ---------------------------- estado ---------------------------- */
  const defaults = () => ({
    settings: {
      rounds: 10, clipSec: 10, answerSec: 10, mode: 'buzzer', hints: true, showCat: true, startAt: 'begin',
      sound: true, vibrate: true, wake: true, noRepeat: true, theme: 'auto'
    },
    players: [], off: {}, excluded: {}, custom: [], seen: {}, history: [], cache: {}, hideInstall: false
  });

  let S = load();
  function load() {
    const d = defaults();
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw);
        return { ...d, ...p, settings: { ...d.settings, ...(p.settings || {}) } };
      }
    } catch (e) { /* modo privado o storage bloqueado */ }
    return d;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* noop */ } }

  const UI = { tab: 'play', open: null, q: '' };

  /* ---------------------------- catálogo ---------------------------- */
  const parseItems = txt => String(txt).split('\n').map(l => l.trim()).filter(Boolean).map(l => {
    const [a, t, ...o] = l.split('|');   // Artista|Canción|Origen (el origen es opcional)
    return { a: a.trim(), t: (t || '').trim(), o: o.join('|').trim() };
  }).filter(x => x.a && x.t);
  const allCats = () => CATS.concat(S.custom.map(c => ({ id: c.id, emoji: c.emoji || '⭐', name: c.name, custom: true, items: parseItems(c.text) })));
  const ikey = (cid, it) => cid + '|' + it.a + '|' + it.t;
  const activeCats = () => allCats()
    .filter(c => !S.off[c.id])
    .map(c => ({ ...c, items: c.items.filter(it => !S.excluded[ikey(c.id, it)]) }))
    .filter(c => c.items.length);
  const poolSize = () => sum(activeCats().map(c => c.items.length));

  /* audio resuelto de antemano (resolved.json) + lo que se fue buscando en iTunes */
  let PRE = {};
  const preReady = fetch('resolved.json').then(r => r.json()).then(j => { PRE = j; }).catch(() => { });
  async function getAudio(song, fresh) {
    await preReady;
    const k = MQ.rkey(song);
    if (!fresh && (PRE[k] || S.cache[k])) return PRE[k] || S.cache[k];
    if (!navigator.onLine) return null;
    const r = await MQ.find(song, u => fetch(u).then(x => x.json()));
    if (r) {
      S.cache[k] = r;
      const ks = Object.keys(S.cache);
      if (ks.length > 400) ks.slice(0, 100).forEach(x => delete S.cache[x]);
      save();
    }
    return r;
  }

  /* ---------------------------- utilidades UI ---------------------------- */
  let toastT;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2400);
  }
  const fmtDur = s => s < 60 ? `${s} seg` : (s % 60 ? `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')} min` : `${s / 60} min`);
  const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, '0')}`;
  const fmtDate = ts => new Date(ts).toLocaleDateString('es-AR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isStandalone = () => window.navigator.standalone === true || (window.matchMedia && matchMedia('(display-mode: standalone)').matches);

  function applyTheme() {
    const r = document.documentElement;
    if (S.settings.theme === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.settings.theme);
  }

  /* En iPhone (app instalada) a veces el área visible termina antes del borde de la pantalla: ya no hay
     "zona del botón de inicio" que respetar adentro de la app, así que se anula ese margen inferior. */
  let sabOff = false;
  function fit() {
    const root = document.documentElement;
    sabOff = false;
    if (isStandalone() && matchMedia('(orientation: portrait)').matches) {
      sabOff = Math.max(screen.width, screen.height) - root.clientHeight >= 20;
    }
    root.style.setProperty('--sab', sabOff ? '0px' : 'env(safe-area-inset-bottom, 0px)');
    root.classList.toggle('sa', isStandalone());
    root.classList.toggle('sab0', sabOff);
  }
  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', () => setTimeout(fit, 250));
  function diagInfo() {
    return `${window.innerWidth}×${document.documentElement.clientHeight} · pantalla ${screen.width}×${screen.height}${sabOff ? ' · margen inferior anulado' : ''} · ${isStandalone() ? 'app instalada' : 'navegador'}`;
  }

  /* sheets */
  let sheetFns = [];
  function openSheet(html) {
    const s = $('#sheet');
    s.innerHTML = `<div class="sheet-in"><div class="grab"></div>${html}</div>`;
    s.dataset.a = 'close-sheet'; s.hidden = false;
  }
  function closeSheet() { $('#sheet').hidden = true; $('#sheet').innerHTML = ''; sheetFns = []; }
  function ask(title, text, buttons) {
    sheetFns = buttons.map(b => b.fn);
    openSheet(`<h3>${title}</h3>${text ? `<p>${text}</p>` : ''}` +
      buttons.map((b, i) => `<button class="btn ${b.cls || ''}" data-a="sheet-btn" data-i="${i}">${b.t}</button>`).join(''));
  }

  /* ---------------------------- efectos de sonido (sintetizados) ---------------------------- */
  let AC = null;
  function unlockAudio() {
    try {
      if (navigator.audioSession) navigator.audioSession.type = 'playback';
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state !== 'running') AC.resume();
    } catch (e) { /* noop */ }
  }
  function out() {
    if (!AC._out) {
      const c = AC.createDynamicsCompressor(); c.threshold.value = -14; c.ratio.value = 8;
      const m = AC.createGain(); m.gain.value = .9; c.connect(m); m.connect(AC.destination); AC._out = c;
    }
    return AC._out;
  }
  let NB = null;
  function noiseBuf() {
    if (NB) return NB;
    NB = AC.createBuffer(1, AC.sampleRate, AC.sampleRate);
    const d = NB.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return NB;
  }
  function tone(freq, dur = .12, type = 'sine', vol = .25, when = 0, sweep = 0) {
    if (!S.settings.sound || !AC) return;
    try {
      const t = AC.currentTime + when;
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t);
      if (sweep) o.frequency.exponentialRampToValueAtTime(sweep, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + .008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(out());
      o.start(t); o.stop(t + dur + .03);
    } catch (e) { /* noop */ }
  }
  function noise(dur, when, f1, f2, q = 1, vol = .3) {
    if (!S.settings.sound || !AC) return;
    try {
      const t = AC.currentTime + when;
      const src = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain();
      src.buffer = noiseBuf(); src.loop = true;
      f.type = 'bandpass'; f.Q.value = q;
      f.frequency.setValueAtTime(f1, t);
      if (f2 !== f1) f.frequency.exponentialRampToValueAtTime(f2, t + dur);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + Math.min(.01, dur / 3));
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(f); f.connect(g); g.connect(out());
      src.start(t, Math.random()); src.stop(t + dur + .03);
    } catch (e) { /* noop */ }
  }
  function bell(freq, when = 0, vol = .22, dur = .9) {
    [[1, 1], [2.76, .6], [5.4, .35], [8.93, .2]].forEach(([m, a]) => tone(freq * m, dur / m ** .4, 'sine', vol * a, when));
  }
  function horn(freq, dur, when, vol = .16) {
    if (!S.settings.sound || !AC) return;
    try {
      const t = AC.currentTime + when;
      const g = AC.createGain(), f = AC.createBiquadFilter(), lfo = AC.createOscillator(), lg = AC.createGain();
      f.type = 'lowpass'; f.frequency.setValueAtTime(900, t); f.frequency.exponentialRampToValueAtTime(3200, t + .06);
      lfo.frequency.value = 6; lg.gain.value = freq * .012; lfo.connect(lg);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .03);
      g.gain.setValueAtTime(vol, t + dur - .05); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      [0, 6].forEach(det => {
        const o = AC.createOscillator(); o.type = 'sawtooth'; o.frequency.value = freq; o.detune.value = det;
        lg.connect(o.frequency); o.connect(f); o.start(t); o.stop(t + dur + .05);
      });
      f.connect(g); g.connect(out()); lfo.start(t); lfo.stop(t + dur + .05);
    } catch (e) { /* noop */ }
  }
  let tickFlip = false;
  const sfx = {
    tick: () => { tickFlip = !tickFlip; noise(.045, 0, tickFlip ? 2400 : 1500, tickFlip ? 1800 : 1100, 6, .5); tone(tickFlip ? 1300 : 900, .05, 'triangle', .12); },
    // buzzer de programa de preguntas
    buzz: () => { tone(220, .22, 'square', .22); tone(330, .22, 'square', .18); tone(990, .12, 'triangle', .22, .02, 1500); },
    // acertó
    right: () => { bell(1318, 0, .22, .7); bell(1760, .13, .2, .9); tone(500, .08, 'sine', .25, 0, 900); },
    half: () => { tone(520, .09, 'sine', .26, 0, 880); tone(780, .12, 'sine', .26, .08, 1100); },
    // erró: "buuu"
    wrong: () => { tone(310, .38, 'sawtooth', .2, 0, 110); tone(155, .38, 'square', .1, 0, 60); },
    // se acabó el tiempo
    end: () => {
      for (let i = 0; i < 9; i++) { tone(2093, .07, 'sine', .22, i * .075); tone(2637, .07, 'sine', .14, i * .075); }
      bell(1568, .72, .2, 1.1);
    },
    pick: () => tone(380, .09, 'sine', .3, 0, 900),
    add: () => bell(1760, 0, .18, .5),
    win: () => {
      horn(392, .13, 0); horn(523, .13, .15); horn(659, .13, .3); horn(784, .65, .45, .2);
      noise(1.6, .5, 2800, 2200, .7, .35);
      for (let i = 0; i < 14; i++) noise(.04, .55 + i * .09 + Math.random() * .05, 1800 + Math.random() * 1500, 1500, 2, .45);
    }
  };
  const vib = p => { if (S.settings.vibrate && navigator.vibrate) { try { navigator.vibrate(p); } catch (e) { /* noop */ } } };

  let WL = null;
  async function wake() {
    if (!S.settings.wake || !('wakeLock' in navigator)) return;
    try { WL = await navigator.wakeLock.request('screen'); } catch (e) { /* noop */ }
  }
  function unwake() { try { if (WL) WL.release(); } catch (e) { /* noop */ } WL = null; }
  document.addEventListener('visibilitychange', () => {
    if (!G) return;
    if (document.hidden) { if (G.phase === 'listen' || G.phase === 'options') au.pause(); return; }
    wake();
    if (AC && AC.state !== 'running') AC.resume().catch(() => { });
  });

  /* ---------------------------- reproductor ---------------------------- */
  const au = $('#au');
  function silentWav() {
    const n = 800, b = new ArrayBuffer(44 + n), v = new DataView(b);
    const w = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)));
    w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVEfmt '); v.setUint32(16, 16, true); v.setUint16(20, 1, true);
    v.setUint16(22, 1, true); v.setUint32(24, 8000, true); v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true);
    w(36, 'data'); v.setUint32(40, n, true); for (let i = 0; i < n; i++) v.setUint8(44 + i, 128);
    return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
  }
  let SILENT = null;
  // iOS solo deja reproducir audio si el primer play() ocurre dentro de un toque: lo "desbloqueamos" con un silencio.
  function unlockPlayer() {
    try { SILENT = SILENT || silentWav(); au.src = SILENT; au.play().catch(() => { }); } catch (e) { /* noop */ }
  }
  async function loadAndPlay(url, start) {
    au.pause();
    au.src = url;
    if (start > 0) au.addEventListener('loadedmetadata', () => { try { au.currentTime = start; } catch (e) { /* noop */ } }, { once: true });
    try { await au.play(); return true; } catch (e) { return false; }
  }

  /* ======================================================================
     VISTAS (tabs)
     ====================================================================== */
  const stepper = (k, label, sub, val) => `
    <div class="row"><div class="lbl"><b>${label}</b><small>${sub}</small></div>
      <div class="stepper"><button data-a="step" data-k="${k}" data-d="-1" aria-label="Menos">−</button><output>${val}</output><button data-a="step" data-k="${k}" data-d="1" aria-label="Más">+</button></div></div>`;
  const seg = (k, opts, cur) => `<div class="seg">${opts.map(([v, t]) => `<button data-a="seg" data-k="${k}" data-v="${v}" class="${cur === v ? 'on' : ''}">${t}</button>`).join('')}</div>`;
  const sw = (k, label, sub) => `
    <div class="row"><div class="lbl"><b>${label}</b>${sub ? `<small>${sub}</small>` : ''}</div>
      <button class="sw" role="switch" aria-checked="${!!S.settings[k]}" aria-label="${label}" data-a="toggle" data-k="${k}"></button></div>`;
  const initial = n => esc(([...n.trim()][0] || '?').toUpperCase());

  const effMode = () => {
    const m = S.settings.mode;
    if (m === 'duel') return 'duel';
    return (m === 'buzzer' && S.players.length >= 2) ? 'buzzer' : 'turns';
  };
  // en 1 vs 1 juegan los dos primeros; si falta alguien se completa solo ("Jugador 1/2")
  const duelNames = () => { const n = S.players.slice(0, 2); while (n.length < 2) n.push('Jugador ' + (n.length + 1)); return n; };

  function viewPlay() {
    const s = S.settings, n = poolSize(), nc = activeCats().length;
    const np = S.players.length;
    const hint = s.mode === 'duel' ? (np > 2 ? 'En 1 vs 1 juegan los dos primeros de la lista.' : np < 2 ? 'No hace falta cargar nombres: si no hay, juegan “Jugador 1” y “Jugador 2”.' : 'Apoyen el celu entre los dos. Si uno toca y falla, el rival suma 1; el rival ve la respuesta para juzgar.')
      : np === 0 ? 'Sin jugadores: jugás solo, con 4 opciones por canción.'
        : (np === 1 && s.mode === 'buzzer') ? 'Con buzzers necesitás 2 o más jugadores. Con uno solo se juega por opciones.'
          : s.mode === 'buzzer' ? 'Cada uno tiene su buzzer: el primero que toca, responde en voz alta.'
            : 'Por turnos: a cada uno le toca una canción con 4 opciones.';
    const install = (isIOS && !isStandalone() && !S.hideInstall) ? `
      <div class="install"><b>📲 Instalala en tu iPhone</b>
      <p>Tocá <b>Compartir</b> en Safari y elegí <b>“Agregar a pantalla de inicio”</b>. Se abre a pantalla completa.</p>
      <button data-a="hide-install" aria-label="Cerrar">✕</button></div>` : '';
    return `${install}
    <section class="card">
      <div class="card-h"><h2><span class="ico">👥</span>Jugadores</h2><span class="count">${np}/${MAX_PLAYERS}</span></div>
      ${np ? `<div class="players">${S.players.map((p, i) => `<span class="pl" style="--pc:${PC[i % PC.length]}"><i>${initial(p)}</i><span>${esc(p)}</span><button data-a="rm-player" data-i="${i}" aria-label="Quitar a ${esc(p)}">✕</button></span>`).join('')}</div>`
        : `<div class="noone">Todavía no hay nadie 👇<br>Sumá a los que van a jugar</div>`}
      <form class="add" data-form="player" autocomplete="off">
        <input type="text" name="n" maxlength="16" placeholder="Nombre del jugador" enterkeyhint="done" autocapitalize="words" autocomplete="off" autocorrect="off">
        <button class="btn sm yellow" type="submit">＋ Sumar</button>
      </form>
      <p class="hint">${hint}</p>
    </section>
    <section class="card">
      <div class="card-h"><h2><span class="ico">🎧</span>La partida</h2></div>
      <div class="row col"><div class="lbl"><b>Modo de juego</b><small>${{ buzzer: 'Un buzzer por jugador: el más rápido responde', duel: 'Cara a cara: celu en el medio, un botón de cada lado', turns: 'Cada uno elige entre 4 opciones, por turnos' }[s.mode]}</small></div>
        ${seg('mode', [['buzzer', '🔔 Buzzers'], ['duel', '⚔️ 1 vs 1'], ['turns', '🎯 Turnos']], s.mode)}</div>
      ${stepper('rounds', 'Canciones', 'cuántas rondas', s.rounds === 0 ? '∞' : s.rounds)}
      ${stepper('clipSec', 'Fragmento', 'cuánto suena de cada tema', fmtDur(s.clipSec))}
      <div class="presets">${CLIP_PRESETS.map(v => `<button class="pre ${s.clipSec === v ? 'on' : ''}" data-a="preset" data-k="clipSec" data-v="${v}">${v} s</button>`).join('')}</div>
      ${stepper('answerSec', 'Tiempo para responder', 'cuenta regresiva', fmtDur(s.answerSec))}
      ${sw('hints', 'Pistas', 'Cantidad de palabras, letra inicial y década')}
    </section>
    <button class="catcard" data-a="tab" data-t="cats">
      <span class="ico">🎶</span>
      <span><b>${fmtN(n)} canciones</b><small>${nc} género${nc === 1 ? '' : 's'} activo${nc === 1 ? '' : 's'} · tocá para elegir</small></span>
      <span class="chev">›</span>
    </button>`;
  }

  function ctaHTML() {
    const s = S.settings, np = S.players.length, n = poolSize();
    const sum2 = [s.rounds === 0 ? '∞ canciones' : `${s.rounds} canciones`, `${s.clipSec} s`, effMode() === 'duel' ? '1 vs 1' : effMode() === 'buzzer' ? `${np} jugadores` : (np >= 2 ? `${np} por turnos` : 'solo')].join(' · ');
    return `<div class="cta-sum">${sum2}</div><button class="btn big" data-a="start" ${n ? '' : 'disabled'}>¡A escuchar! 🎵</button>`;
  }

  function catListHTML() {
    const q = MQ.norm(UI.q || '');
    const cats = allCats();
    let out = '', shown = 0;
    cats.forEach(c => {
      const nameHit = !q || MQ.norm(c.name).includes(q);
      const items = c.items.map((it, i) => ({ it, i })).filter(x => !q || nameHit || MQ.norm(x.it.a + ' ' + x.it.t).includes(q));
      if (q && !nameHit && !items.length) return;
      shown++;
      const on = !S.off[c.id];
      const ex = c.items.filter(it => S.excluded[ikey(c.id, it)]).length;
      const open = UI.open === c.id || (q && !nameHit && items.length > 0);
      out += `<div class="cat ${on ? '' : 'off'}">
        <div class="cat-top">
          <button class="cat-open" data-a="expand" data-id="${esc(c.id)}" aria-expanded="${open}">
            <span class="cat-emoji">${esc(c.emoji)}</span>
            <span><b>${esc(c.name)}${c.custom ? '<span class="badge">MÍA</span>' : ''}</b><small>${c.items.length - ex} canciones${ex ? ` · ${ex} sacadas` : ''} · ${open ? 'cerrar ▴' : 'ver ▾'}</small></span>
          </button>
          <button class="sw" role="switch" aria-checked="${on}" aria-label="Activar ${esc(c.name)}" data-a="cat-toggle" data-id="${esc(c.id)}"></button>
        </div>
        ${open ? `<div class="cat-body">
          <p class="hint">Tocá una canción para sacarla (o volver a ponerla) del sorteo.</p>
          <div class="items">${items.map(({ it, i }) => `<button class="item ${S.excluded[ikey(c.id, it)] ? 'x' : ''}" data-a="toggle-item" data-c="${esc(c.id)}" data-i="${i}"><b>${esc(it.t)}</b> <small>· ${esc(it.a)}</small></button>`).join('')}</div>
          ${c.custom ? `<div class="cat-actions"><button class="btn sm" data-a="edit-cat" data-id="${esc(c.id)}">✎ Editar</button><button class="btn sm ghost" data-a="del-cat" data-id="${esc(c.id)}">🗑 Borrar</button></div>` : (ex ? `<div class="cat-actions"><button class="btn sm ghost" data-a="reset-items" data-id="${esc(c.id)}">Volver a poner las sacadas</button></div>` : '')}
        </div>` : ''}
      </div>`;
    });
    return shown ? out : `<div class="nores">No encontré nada con “${esc(UI.q)}” 🤔</div>`;
  }

  function viewCats() {
    const n = poolSize(), nc = activeCats().length, tot = allCats().length;
    return `<div class="catbar">
        <div class="total"><b>${fmtN(n)} canciones</b><span>${nc} de ${tot} géneros</span></div>
        <input type="search" id="q" placeholder="Buscar canción o artista…" value="${esc(UI.q || '')}" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search">
        <div class="tools"><button class="link" data-a="cats-all">Todos</button><button class="link" data-a="cats-none">Ninguno</button>
          <button class="btn sm yellow" data-a="new-cat">＋ Mi playlist</button></div>
      </div>
      <div id="catlist">${catListHTML()}</div>
      <p class="hint" style="text-align:center">Podés armar tu propia playlist con los temas que quieras (la app los busca solita).</p>`;
  }

  function viewHist() {
    const H = S.history;
    if (!H.length) return `<div class="empty"><div class="big">🏆</div>Todavía no hay partidas.<br>Jugá una y queda guardada acá.</div>`;
    const tot = {};
    H.forEach(g => {
      const top = Math.max(...g.scores);
      g.players.forEach((p, i) => {
        const k = p.trim().toLowerCase();
        tot[k] = tot[k] || { name: p, wins: 0, games: 0, pts: 0 };
        tot[k].games++; tot[k].pts += g.scores[i];
        if (top > 0 && g.scores[i] === top && g.players.length > 1) tot[k].wins++;
      });
    });
    const rank = Object.values(tot).sort((a, b) => b.wins - a.wins || b.pts - a.pts);
    const medals = ['🥇', '🥈', '🥉'];
    return `<section class="card"><div class="card-h"><h2><span class="ico">🏆</span>Ranking de victorias</h2></div>
      ${rank.map((r, i) => `<div class="rank-row"><div class="medal">${medals[i] || (i + 1)}</div><div class="nm">${esc(r.name)}<small>${r.games} partida${r.games > 1 ? 's' : ''} · ${r.pts} punto${r.pts === 1 ? '' : 's'} en total</small></div><div class="pts">${r.wins}</div></div>`).join('')}
    </section>
    <section class="card"><div class="card-h"><h2><span class="ico">🕘</span>Últimas partidas</h2></div>
      ${H.slice(0, 25).map(g => {
        const top = Math.max(...g.scores);
        const ws = top > 0 ? g.players.filter((_, i) => g.scores[i] === top) : [];
        return `<div class="game-row"><b>${g.players.length > 1 ? (ws.length ? '🏆 ' + esc(ws.join(' y ')) : 'Sin ganador') : `🎯 ${g.scores[0]} puntos`}</b><small>${fmtDate(g.ts)} · ${g.total} canción${g.total > 1 ? 'es' : ''} · ${g.players.map((p, i) => `${esc(p)} ${g.scores[i]}`).join(' · ')}</small></div>`;
      }).join('')}
      <div style="margin-top:12px"><button class="btn sm ghost" data-a="clear-hist">Borrar historial</button></div>
    </section>`;
  }

  function viewSet() {
    const s = S.settings;
    return `<section class="card"><div class="card-h"><h2><span class="ico">🔔</span>Durante el juego</h2></div>
      ${sw('sound', 'Efectos de sonido', 'Buzzer, campanita, aplausos')}
      ${sw('vibrate', 'Vibración', 'Solo en teléfonos que la permiten')}
      ${sw('wake', 'Mantener pantalla prendida', 'Para que no se apague mientras juegan')}
      ${sw('showCat', 'Mostrar el género', 'Una pista gratis en cada canción')}
      <div class="row col"><div class="lbl"><b>El fragmento empieza</b><small>${s.startAt === 'begin' ? 'Desde el comienzo del tema' : 'En un punto al azar (más difícil)'}</small></div>
        ${seg('startAt', [['begin', 'Desde el inicio'], ['random', 'Al azar']], s.startAt)}</div>
    </section>
    <section class="card"><div class="card-h"><h2><span class="ico">🎲</span>Sorteo</h2></div>
      ${sw('noRepeat', 'No repetir canciones', 'Hasta agotar el catálogo, entre partidas también')}
      <div class="row"><div class="lbl"><b>Canciones ya sonadas</b><small>${fmtN(Object.keys(S.seen).length)} en memoria</small></div><button class="btn sm ghost" data-a="reset-seen">Reiniciar</button></div>
    </section>
    <section class="card"><div class="card-h"><h2><span class="ico">🎨</span>Apariencia</h2></div>
      <div class="row col"><div class="lbl"><b>Tema</b></div>${seg('theme', [['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Oscuro']], s.theme)}</div>
    </section>
    <section class="card"><div class="card-h"><h2><span class="ico">ℹ️</span>Tips</h2></div>
      <p class="hint" style="margin-top:0">• Necesitás <b>internet</b> para escuchar los temas (la app abre sin conexión, pero la música no).<br>• Si no suena en el iPhone, fijate que no esté el <b>modo silencio</b> y que el volumen esté arriba.<br>• Para instalarla: Safari → <b>Compartir</b> → <b>Agregar a pantalla de inicio</b>.<br>• Mejor jugar con el cel en el medio de la mesa, ¡y con parlante! En <b>1 vs 1</b> cada uno toca el botón de su lado; el rival ve la respuesta (manteniendo apretado) para juzgar, y si el otro falla, suma 1.</p>
    </section>
    <section class="card"><div class="card-h"><h2><span class="ico">🧹</span>Datos</h2></div>
      <button class="btn sm ghost" data-a="reset-all">Restablecer todo</button>
      <p class="hint">Se guarda todo en este dispositivo. Musiquita v1.0 · hecho con ❤️ para adivinar con amigos.<br>Fragmentos de 30 segundos cortesía de la API pública de iTunes / Apple Music.</p>
      <p class="hint" style="font-size:11.5px;opacity:.7;margin-top:0">${diagInfo()}</p>
    </section>`;
  }

  const VIEWS = { play: viewPlay, cats: viewCats, hist: viewHist, set: viewSet };

  function render(keep = true) {
    const v = $('#view');
    const top = keep ? v.scrollTop : 0;
    v.innerHTML = VIEWS[UI.tab]();
    v.scrollTop = top;
    $$('#tabbar button').forEach(b => b.classList.toggle('on', b.dataset.t === UI.tab));
    const cta = $('#cta');
    cta.hidden = UI.tab !== 'play';
    if (!cta.hidden) cta.innerHTML = ctaHTML();
  }

  /* ======================================================================
     JUEGO
     ====================================================================== */
  const gameEl = $('#game');
  let G = null, loopId = null;

  function pickSong() {
    const cats = activeCats();
    let avail = cats.map(c => ({ c, items: c.items.filter(it => !G.used.has(ikey(c.id, it))) })).filter(x => x.items.length);
    if (!avail.length) { G.used.clear(); avail = cats.map(c => ({ c, items: c.items })); }
    if (S.settings.noRepeat) {
      const fresh = avail.map(x => ({ c: x.c, items: x.items.filter(it => !S.seen[ikey(x.c.id, it)]) })).filter(x => x.items.length);
      if (fresh.length) avail = fresh;
      else cats.forEach(c => c.items.forEach(it => { delete S.seen[ikey(c.id, it)]; }));
    }
    const w = avail.map(x => Math.sqrt(x.items.length));
    let r = Math.random() * sum(w), i = 0;
    while (i < w.length - 1 && (r -= w[i]) > 0) i++;
    const x = avail[i], it = x.items[rand(x.items.length)];
    const k = ikey(x.c.id, it);
    G.used.add(k); S.seen[k] = 1; save();
    return { song: it, cat: x.c.name, emoji: x.c.emoji, catId: x.c.id };
  }

  // elige una canción que tenga audio disponible (si una falla, prueba otra)
  async function pickPlayable() {
    for (let i = 0; i < 8; i++) {
      const p = pickSong();
      const res = await getAudio(p.song);
      if (res) return { ...p, res };
    }
    return null;
  }

  function makeOptions(p) {
    const all = activeCats();
    const same = (all.find(c => c.id === p.catId) || { items: [] }).items;
    const others = same.concat(...all.map(c => c.items)).filter(it => MQ.norm(it.a) !== MQ.norm(p.song.a));
    const seenA = new Set([MQ.norm(p.song.a)]), picks = [];
    const take = list => shuffle(list.slice(0, 600)).forEach(it => { if (picks.length < 3 && !seenA.has(MQ.norm(it.a))) { seenA.add(MQ.norm(it.a)); picks.push(it); } });
    take(others);
    // si la playlist es muy chica, se completan las opciones con temas de todo el catálogo
    if (picks.length < 3) take([].concat(...CATS.map(c => c.items)));
    return shuffle([{ a: p.song.a, t: p.song.t, ok: true }, ...picks.map(x => ({ a: x.a, t: x.t, ok: false }))]);
  }

  function startGame() {
    if (!poolSize()) { toast('Activá al menos un género 🎶'); return; }
    if (!navigator.onLine) { toast('Necesitás internet para escuchar la música 📶'); return; }
    unlockAudio(); unlockPlayer();
    const st = { ...S.settings };
    const mode = effMode();
    const players = mode === 'duel' ? duelNames() : (S.players.length ? S.players.slice() : ['Vos']);
    G = {
      st, mode, players, scoring: players.length >= 2, rounds: [], phase: 'load', used: new Set(), total: st.rounds,
      to: null, locked: new Set(), buzzer: null, hints: 0, streak: 0, best: 0, token: 0, startedAt: Date.now()
    };
    gameEl.hidden = false;
    wake();
    clearInterval(loopId); loopId = setInterval(tick, 100);
    vib(30);
    nextRound();
  }

  function exitGame() {
    clearInterval(loopId); clearTimeout(G && G.to); unwake();
    try { au.pause(); } catch (e) { /* noop */ }
    G = null; gameEl.hidden = true; gameEl.innerHTML = '';
    closeSheet(); render();
  }

  const curRound = () => G.rounds[G.rounds.length - 1];
  const calcScores = () => G.players.map((_, i) => sum(G.rounds.filter(r => r.winner === i).map(r => r.pts || 0)));

  async function nextRound() {
    clearTimeout(G.to);
    if (G.total > 0 && G.rounds.length >= G.total) return finish();
    const token = ++G.token;
    G.phase = 'load'; G.locked = new Set(); G.buzzer = null; G.hints = 0;
    renderGame();
    const p = await (G.pre || pickPlayable());
    G.pre = null;
    if (!G || token !== G.token) return;
    if (!p) { G.phase = 'error'; renderGame(); return; }
    const round = { song: p.song, res: p.res, cat: p.cat, emoji: p.emoji, winner: null, pts: 0, picker: G.rounds.length % G.players.length };
    if (G.mode === 'turns') round.opts = makeOptions(p);
    G.rounds.push(round);
    const start = G.st.startAt === 'random' ? rand(Math.max(1, PREVIEW_MAX - G.st.clipSec)) : 0;
    G.clipStart = start; G.clipEnd = Math.min(PREVIEW_MAX, start + G.st.clipSec); G.clipDone = false; G.fresh = false;
    G.phase = G.mode === 'turns' ? 'options' : 'listen';
    G.ansEnd = Date.now() + G.st.answerSec * 1000;
    renderGame();
    const ok = await loadAndPlay(p.res.u, start);
    if (!ok) { toast('Tocá ▶ Repetir para escuchar'); }
    // pre-carga de la siguiente canción mientras se juega esta
    if (!(G.total > 0 && G.rounds.length >= G.total)) G.pre = pickPlayable();
  }

  function repeatClip() {
    if (!G || !(G.phase === 'listen' || G.phase === 'options')) return;
    au.currentTime = G.clipStart; G.clipEnd = Math.min(PREVIEW_MAX, G.clipStart + G.st.clipSec); G.clipDone = false;
    au.play().catch(() => { });
    paintClip();
  }
  function extendClip() {
    G.clipEnd = Math.min(PREVIEW_MAX, Math.max(G.clipEnd, au.currentTime) + 5); G.clipDone = false;
    sfx.add(); au.play().catch(() => { }); paintClip();
  }

  function buzz(i) {
    if (!G || G.phase !== 'listen' || G.locked.has(i)) return;
    au.pause(); G.buzzer = i; G.phase = 'answer';
    G.ansEnd = Date.now() + G.st.answerSec * 1000; G.lastBeep = null;
    sfx.buzz(); vib([60, 40, 60]);
    renderGame();
  }

  function judge(kind) {
    if (!G || G.phase !== 'answer') return;
    const r = curRound(), i = G.buzzer;
    if (kind === 'bad') {
      sfx.wrong(); vib(150);
      if (G.mode === 'duel') {   // el rival ya vio la respuesta: no puede competir, así que se lleva 1 punto y se revela
        const o = 1 - i;
        r.winner = o; r.pts = 1; r.steal = true; r.failer = i;
        return reveal(o);
      }
      G.locked.add(i); G.buzzer = null;
      if (G.locked.size >= G.players.length) return reveal(null);
      G.phase = 'listen'; G.clipEnd = Math.min(PREVIEW_MAX, Math.max(G.clipEnd, au.currentTime) + 5); G.clipDone = false;
      renderGame(); au.play().catch(() => { });
      return;
    }
    r.winner = i; r.pts = kind === 'full' ? 2 : 1;
    (kind === 'full' ? sfx.right : sfx.half)(); vib(kind === 'full' ? [80, 50, 80] : 60);
    reveal(i);
  }

  function choose(idx) {
    if (!G || G.phase !== 'options') return;
    const r = curRound();
    if (r.picked != null) return;
    r.picked = idx;
    const right = r.opts[idx] && r.opts[idx].ok;
    if (right) {
      r.winner = r.picker; r.pts = G.hints === 0 ? 2 : 1;
      G.streak++; G.best = Math.max(G.best, G.streak);
      sfx.right(); vib([80, 50, 80]);
    } else { G.streak = 0; sfx.wrong(); vib(150); }
    reveal(right ? r.picker : null);
  }

  function reveal(who) {
    clearTimeout(G.to);
    const r = curRound();
    if (who == null) r.winner = r.winner == null ? -1 : r.winner;
    G.phase = 'reveal';
    renderGame();
    // seguimos con el tema completo mientras se ve la tapa
    au.play().catch(() => { }).then(syncPlayUI);
  }

  function afterReveal() { try { au.pause(); } catch (e) { /* noop */ } nextRound(); }

  function useHint() {
    if (!G || !G.st.hints || G.hints >= 2 || !(G.phase === 'listen' || G.phase === 'options')) return;
    G.hints++; sfx.pick(); renderGame();
  }

  function finish() {
    clearTimeout(G.to); unwake();
    try { au.pause(); } catch (e) { /* noop */ }
    if (!G.rounds.length) return exitGame();
    G.phase = 'final';
    const sc = calcScores();
    S.history.unshift({ id: Date.now(), ts: Date.now(), players: G.players, scores: sc, total: G.rounds.length, mode: G.mode,
      rounds: G.rounds.map(r => ({ a: r.song.a, t: r.song.t, w: r.winner })) });
    S.history = S.history.slice(0, 60); save();
    renderGame();
    sfx.win(); vib([100, 60, 100, 60, 300]);
    if (G.players.length > 1) setTimeout(confetti, 150);
  }

  function endEarly() {
    G.token++;
    // la ronda en curso (sin resolver) no cuenta
    if (G.phase !== 'reveal' && G.phase !== 'final' && G.rounds.length && curRound().winner == null) G.rounds.pop();
    if (!G.rounds.length) return exitGame();
    finish();
  }

  /* loop de 100 ms: avance del fragmento y cuentas regresivas */
  function tick() {
    if (!G) return;
    if (G.phase === 'listen' || G.phase === 'options') {
      if (!G.clipDone && !au.paused && (au.currentTime >= G.clipEnd || au.ended)) { au.pause(); G.clipDone = true; }
      paintClip();
      if (G.phase === 'options' && !G.timeUp) {
        const left = G.ansEnd - Date.now();
        $$('[data-tb]').forEach(bar => { bar.style.width = Math.max(0, left / (G.st.answerSec * 1000) * 100) + '%'; });
        const sec = Math.ceil(left / 1000);
        if (sec <= 3 && sec > 0 && G.lastBeep !== sec) { G.lastBeep = sec; sfx.tick(); }
        if (left <= 0) { G.timeUp = true; sfx.end(); const r = curRound(); r.picked = -1; G.streak = 0; reveal(null); G.timeUp = false; }
      }
    } else if (G.phase === 'answer') {
      const left = G.ansEnd - Date.now();
      $$('[data-tb]').forEach(bar => { bar.style.width = Math.max(0, left / (G.st.answerSec * 1000) * 100) + '%'; });
      $$('[data-tt]').forEach(t => { t.textContent = Math.max(0, Math.ceil(left / 1000)); });
      const sec = Math.ceil(left / 1000);
      if (sec <= 3 && sec > 0 && G.lastBeep !== sec) { G.lastBeep = sec; sfx.tick(); vib(20); }
      if (left <= 0) { sfx.end(); judge('bad'); }
    }
  }

  function paintClip() {
    const cp = $('#cp'), ct = $('#ct'), v = $('#vinyl');
    if (!cp) return;
    const len = Math.max(1, G.clipEnd - G.clipStart);
    const played = Math.max(0, Math.min(len, au.currentTime - G.clipStart));
    cp.style.width = (played / len * 100) + '%';
    const loading = !au.paused && au.readyState < 3;
    if (ct) ct.textContent = loading ? 'Cargando…' : (G.clipDone ? 'Fragmento terminado · tocá 🔁 para repetir' : `${mmss(played)} / ${mmss(len)}`);
    if (v) v.classList.toggle('spin', !au.paused && !G.clipDone && !loading);
  }

  /* ---------------------------- render del juego ---------------------------- */
  const head = title => `<div class="g-head"><button class="ibtn" data-a="g-quit" aria-label="Salir">✕</button><div class="g-round">${title}</div><button class="ibtn" data-a="g-sound" aria-label="Sonido">${S.settings.sound ? '🔊' : '🔇'}</button></div>`;
  const roundNo = () => (G.phase === 'load' || G.phase === 'error') ? G.rounds.length + 1 : (G.rounds.length || 1);
  const roundLabel = () => G.total ? `Canción ${roundNo()} de ${G.total}` : `Canción ${roundNo()}`;
  const prog = () => {
    if (!G.total) return '<div class="g-prog"><i style="width:100%;opacity:.25"></i></div>';
    const d = G.rounds.length - ((G.phase === 'reveal' || G.phase === 'load' || G.phase === 'error') ? 0 : 1);
    return `<div class="g-prog"><i style="width:${Math.max(4, Math.min(100, Math.max(0, d) / G.total * 100))}%"></i></div>`;
  };
  const scoresStrip = () => {
    const sc = calcScores();
    if (G.players.length < 2) return `<div class="g-scores"><span class="spill" style="--pc:#f6b40e"><i></i>Puntos <b>${sc[0]}</b></span>${G.streak > 1 ? `<span class="spill">🔥 Racha <b>${G.streak}</b></span>` : ''}</div>`;
    return `<div class="g-scores">${G.players.map((p, i) => `<span class="spill" style="--pc:${PC[i % PC.length]}"><i></i>${esc(p)} <b>${sc[i]}</b></span>`).join('')}</div>`;
  };

  function hintChips() {
    const r = curRound(), s = r.song;
    const chips = [];
    if (G.st.showCat) chips.push(`<span class="hchip">${esc(r.emoji)} ${esc(r.cat)}</span>`);
    if (G.hints >= 1) {
      const words = s.t.replace(/\(.*?\)|\[.*?\]/g, '').trim().split(/\s+/).length;
      chips.push(`<span class="hchip">📝 Título de ${words} palabra${words > 1 ? 's' : ''}</span>`);
      chips.push(`<span class="hchip">🎤 Artista: ${esc(s.a.trim()[0].toUpperCase())}…</span>`);
    }
    if (G.hints >= 2 && r.res.y) chips.push(`<span class="hchip">📅 Década del ${String(Math.floor(r.res.y / 10) * 10).slice(2)}</span>`);
    return chips.join('');
  }

  const vinyl = (spin, art) => `<div class="vinyl ${spin ? 'spin' : ''}" id="vinyl"><div class="lab" ${art ? `style="background-image:url('${esc(art)}')"` : ''}>${art ? '' : '🎵'}</div></div>`;
  const clipBar = () => `<div class="cliprog"><i id="cp"></i></div><div class="cliptxt" id="ct">0:00</div>`;
  const clipActions = extra => {
    const btns = [`<button class="btn gbtn" data-a="g-repeat"><span>🔁</span>Repetir</button>`, `<button class="btn gbtn" data-a="g-more"><span>➕</span>5 seg</button>`];
    if (G.st.hints) btns.push(`<button class="btn gbtn" data-a="g-hint" ${G.hints >= 2 ? 'disabled style="opacity:.4"' : ''}><span>💡</span>Pista ${G.hints}/2</button>`);
    btns.push(extra);
    return `<div class="g-actions" style="grid-template-columns:repeat(${btns.length},1fr)">${btns.join('')}</div>`;
  };

  const GV = {
    load() {
      return `${head('Preparando…')}<div class="g-main"><div class="g-card"><div class="g-emoji">🎧</div><div class="g-title" style="font-size:28px">Buscando una canción…</div><div class="g-sub">Un segundito</div></div></div>`;
    },
    error() {
      return `${head('Ups')}<div class="g-main"><div class="g-card"><div class="g-emoji">📶</div><div class="g-title" style="font-size:26px">No pude cargar la música</div><div class="g-sub">Fijate que tengas internet y probá de nuevo.</div></div></div>
      <div class="g-actions" style="grid-template-columns:1fr 1fr"><button class="btn gbtn" data-a="g-exit"><span>🏠</span>Salir</button><button class="btn" data-a="g-retry">Reintentar</button></div>`;
    },
    listen() {
      const lockedAll = G.players.map((p, i) => `<button class="bz ${G.locked.has(i) ? 'lock' : ''}" style="--pc:${PC[i % PC.length]}" data-a="g-buzz" data-i="${i}" ${G.locked.has(i) ? 'disabled' : ''}><i>${initial(p)}</i><span>${esc(p)}</span></button>`).join('');
      return `${head(roundLabel())}${prog()}${scoresStrip()}
      <div class="g-main">
        ${vinyl(true)}
        <div class="g-title" style="font-size:clamp(24px,7.4vw,34px)">¿Qué canción es?</div>
        ${clipBar()}
        <div class="hints" id="hints">${hintChips()}</div>
      </div>
      ${clipActions(`<button class="btn gbtn" data-a="g-reveal"><span>👁️</span>Revelar</button>`)}
      <div class="buzz ${G.players.length <= 2 ? 'big' : ''}">${lockedAll}</div>`;
    },
    answer() {
      const i = G.buzzer, p = G.players[i];
      return `${head(roundLabel())}${prog()}${scoresStrip()}
      <div class="g-main">
        ${vinyl(false)}
        <div class="g-kicker" style="opacity:.8">Responde…</div>
        <div class="g-title ans" style="color:${PC[i % PC.length]}">${esc(p)}</div>
        <div class="ansbar"><i data-tb></i></div>
        <div class="g-sub"><b data-tt>${G.st.answerSec}</b> seg · artista y canción en voz alta 🎤</div>
      </div>
      <div class="judge">
        <button class="jd ok" data-a="g-judge" data-k="full"><b>✔ ¡Clavó!</b><small>Artista y canción · +2</small></button>
        <button class="jd mid" data-a="g-judge" data-k="half"><b>½ Casi</b><small>Solo uno de los dos · +1</small></button>
        <button class="jd bad" data-a="g-judge" data-k="bad"><b>✘ Falló</b><small>Sigue el resto</small></button>
      </div>`;
    },
    options() {
      const r = curRound(), pi = r.picker, who = G.players.length > 1 ? `<div class="g-kicker" style="color:${PC[pi % PC.length]}">Le toca a ${esc(G.players[pi])}</div>` : '';
      return `${head(roundLabel())}${prog()}${scoresStrip()}
      <div class="g-main">
        ${who}
        ${vinyl(true)}
        ${clipBar()}
        <div class="hints" id="hints">${hintChips()}</div>
        <div class="ansbar"><i data-tb></i></div>
        <div class="opts">${r.opts.map((o, i) => `<button class="opt" data-a="g-choose" data-i="${i}"><b>${esc(o.t)}</b><small>${esc(o.a)}</small></button>`).join('')}</div>
      </div>
      ${clipActions(`<button class="btn gbtn" data-a="g-reveal"><span>🏳️</span>Pasar</button>`)}`;
    },
    reveal() {
      const r = curRound(), s = r.song, res = r.res;
      const who = r.winner != null && r.winner >= 0 ? G.players[r.winner] : null;
      const msg = who ? `🎉 +${r.pts} para ${esc(who)}` : (G.mode === 'turns' && r.picked != null && r.picked >= 0 ? '😬 Esa no era' : (r.picked === -1 ? '⏰ Se acabó el tiempo' : r.picked === -2 ? '🏳️ Pasaron' : '😅 Nadie la adivinó'));
      const yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(s.a + ' ' + s.t);
      const optsRes = G.mode === 'turns' && r.opts ? `<div class="opts rv">${r.opts.map((o, i) => `<div class="opt ${o.ok ? 'ok' : (r.picked === i ? 'bad' : 'dim')}"><b>${esc(o.t)}</b><small>${esc(o.a)}</small></div>`).join('')}</div>` : '';
      return `${head(roundLabel())}${prog()}${scoresStrip()}
      <div class="g-main rvmain ${optsRes ? 'tight' : ''}">
        <div class="art" id="art">${res.i ? `<img src="${esc(res.i)}" alt="" onerror="this.remove()">` : '🎵'}</div>
        <h1 class="g-name rvt">${esc(s.t)}</h1>
        <div class="g-origin">${esc(s.a)}</div>
        ${s.o ? `<div class="from">🎬 De: ${esc(s.o)}</div>` : ''}
        <div class="g-sub" style="font-size:14px">${res.y ? `${res.y} · ` : ''}${esc(r.emoji)} ${esc(r.cat)}</div>
        <div class="rvmsg ${who ? 'win' : ''}">${msg}</div>
        ${optsRes}
        <div class="links"><a href="${esc(yt)}" target="_blank" rel="noopener">▶ YouTube</a>${res.l ? `<a href="${esc(res.l)}" target="_blank" rel="noopener">🎧 Apple Music</a>` : ''}</div>
      </div>
      <div class="g-actions" style="grid-template-columns:1fr 2fr">
        <button class="btn gbtn" data-a="g-play"><span id="pp">⏸️</span>Tema</button>
        <button class="btn" data-a="g-next">${G.total > 0 && G.rounds.length >= G.total ? 'Ver resultados 🏆' : 'Siguiente ▶'}</button>
      </div>`;
    },
    final() {
      const n = G.rounds.length;
      if (G.players.length < 2) {
        const hit = G.rounds.filter(r => r.winner === 0).length;
        return `${head('¡Terminó!')}
        <div class="final"><div class="trophy">${hit >= n * .7 ? '🏆' : '🎧'}</div><div class="winner">${hit} de ${n}</div><div class="sub">${hit >= n * .8 ? '¡Tenés oído de DJ!' : hit >= n * .5 ? 'Nada mal, ¡seguí así!' : 'Hay que escuchar más música 😄'}${G.best > 1 ? ` · mejor racha ${G.best} 🔥` : ''}</div>
          <div class="recap">${G.rounds.map(r => `<div class="rr"><em>${r.winner === 0 ? '✅' : '❌'}</em><div>${esc(r.song.t)}<small>${esc(r.song.a)}${r.song.o ? ` · ${esc(r.song.o)}` : ''}</small></div></div>`).join('')}</div></div>
        <div class="final-actions"><div class="row2"><button class="btn" data-a="g-again">🔁 Otra vuelta</button><button class="btn blue" data-a="g-share">📤 Compartir</button></div><button class="btn ghost" data-a="g-exit">Volver al inicio</button></div>`;
      }
      const order = rankOrder(), top = order[0] ? order[0].s : 0, max = Math.max(1, top);
      const winners = top > 0 ? order.filter(o => o.s === top) : [];
      const medals = ['🥇', '🥈', '🥉'];
      const title = winners.length === 1 ? `¡Ganó ${esc(winners[0].p)}!` : winners.length > 1 ? '¡Empate!' : 'Sin ganadores';
      const sub = winners.length > 1 ? esc(winners.map(w => w.p).join(' y ')) + ` con ${top} punto${top > 1 ? 's' : ''}` : winners.length ? `${top} punto${top > 1 ? 's' : ''} en ${n} canción${n > 1 ? 'es' : ''}` : 'Nadie se llevó puntos esta vez';
      return `${head('Resultados')}
      <div class="final"><canvas id="confetti"></canvas>
        <div class="trophy">${winners.length ? '🏆' : '🤷'}</div><div class="winner">${title}</div><div class="sub">${sub}</div>
        <div class="bars">${order.map(o => `<div class="bar" style="--pc:${PC[o.i % PC.length]}"><div class="m">${medals[o.pos - 1] || o.pos}</div><div><div class="nm">${esc(o.p)}</div><div class="track"><i style="width:${o.s / max * 100}%"></i></div></div><div class="pp">${o.s}</div></div>`).join('')}</div>
        <div class="recap">${G.rounds.map(r => `<div class="rr"><em>${esc(r.emoji)}</em><div>${esc(r.song.t)}<small>${esc(r.song.a)}${r.song.o ? ` · ${esc(r.song.o)}` : ''}</small></div>${r.winner != null && r.winner >= 0 ? `<span style="--pc:${PC[r.winner % PC.length]}"><i></i>${esc(G.players[r.winner])}</span>` : '<span>—</span>'}</div>`).join('')}</div>
      </div>
      <div class="final-actions"><div class="row2"><button class="btn" data-a="g-again">🔁 Revancha</button><button class="btn blue" data-a="g-share">📤 Compartir</button></div>
        <button class="btn ghost" data-a="g-exit">Volver al inicio</button></div>`;
    }
  };

  /* ---------------------- modo cara a cara (1 vs 1) ----------------------
     El celu se apoya en la mesa entre los dos. Abajo juega el jugador 1; arriba el jugador 2, con su mitad
     de pantalla girada 180° para que la lea el que está enfrente. En el medio quedan los controles comunes. */
  const dName = i => esc(G.players[i]);
  const dHead = i => `<div class="dhead"><span class="dname"><i></i>${dName(i)}</span><b class="dscore">${calcScores()[i]}</b>${(G.phase === 'listen' || G.phase === 'answer') && G.rounds.length ? `<div class="hints dh">${hintChips()}</div>` : ''}</div>`;
  const dSide = (i, pos, inner) => `<section class="dside ${pos}" style="--pc:${PC[i % PC.length]}">${dHead(i)}${inner}</section>`;
  const dTopBar = () => `<div class="dtop"><button class="ibtn" data-a="g-quit" aria-label="Salir">✕</button><div class="g-round">${roundLabel()}</div><button class="ibtn" data-a="g-sound" aria-label="Sonido">${S.settings.sound ? '🔊' : '🔇'}</button></div>`;
  const duelWrap = (side, mid) => `<div class="duel">${side(1, 'ptop')}<div class="dmid">${dTopBar()}${mid}</div>${side(0, 'pbot')}</div>`;

  const DUEL = {
    listen() {
      const side = (i, pos) => dSide(i, pos, `<button class="dbuzz ${G.locked.has(i) ? 'lock' : ''}" data-a="g-buzz" data-i="${i}" ${G.locked.has(i) ? 'disabled' : ''}>${G.locked.has(i) ? 'Bloqueado' : '¡YO!'}<small>${G.locked.has(i) ? 'ya fallaste en esta' : 'tocá cuando sepas'}</small></button>`);
      return duelWrap(side, `${vinyl(true)}${clipBar()}${clipActions(`<button class="btn gbtn" data-a="g-reveal"><span>👁️</span>Revelar</button>`)}`);
    },
    answer() {
      const a = G.buzzer;
      const side = (i, pos) => i === a
        ? dSide(i, pos, `<div class="dans"><div class="g-kicker">¡Respondé!</div><div class="ansbar"><i data-tb></i></div><div class="g-sub"><b data-tt>${G.st.answerSec}</b> seg · artista y canción en voz alta 🎤</div></div>`)
        : dSide(i, pos, `<div class="dans"><div class="g-sub dq">¿Lo dijo bien <b>${dName(a)}</b>?</div>
            <div class="peekbtn" role="button" aria-label="Mantené apretado para ver la respuesta">
              <span class="pk-off">👁️ Mantené apretado<br>para ver la respuesta</span>
              <span class="pk-on"><b>${esc(curRound().song.t)}</b><small>${esc(curRound().song.a)}</small></span>
            </div>
            <div class="drow">
              <button class="jd ok" data-a="g-judge" data-k="full"><b>✔ Clavó</b><small>+2</small></button>
              <button class="jd mid" data-a="g-judge" data-k="half"><b>½ Casi</b><small>+1</small></button>
              <button class="jd bad" data-a="g-judge" data-k="bad"><b>✘ Falló</b><small>+1 para vos</small></button>
            </div></div>`);
      return duelWrap(side, `${vinyl(false)}<div class="g-sub" style="font-size:14px">Música en pausa ⏸️</div>`);
    },
    reveal() {
      const r = curRound(), s = r.song, res = r.res, who = r.winner != null && r.winner >= 0 ? r.winner : null;
      const last = G.total > 0 && G.rounds.length >= G.total;
      const yt = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(s.a + ' ' + s.t);
      const side = (i, pos) => dSide(i, pos, `<div class="drv"><div class="rvmsg ${who === i ? 'win' : ''}">${r.steal ? (who === i ? `🎯 +1 porque ${dName(r.failer)} falló` : `😬 Fallaste: +1 para ${dName(who)}`) : who === i ? `🎉 ¡Sumaste +${r.pts}!` : who != null ? `${dName(who)} sumó +${r.pts}` : '😅 Nadie la adivinó'}</div>
          <div class="drvt">${esc(s.t)}</div><div class="drva">${esc(s.a)}</div>${s.o ? `<div class="from">🎬 De: ${esc(s.o)}</div>` : ''}</div>
          <button class="btn dnext" data-a="g-next">${last ? 'Resultados 🏆' : 'Siguiente ▶'}</button>`);
      return duelWrap(side, `<div class="art" id="art">${res.i ? `<img src="${esc(res.i)}" alt="" onerror="this.remove()">` : '🎵'}</div>
        <div class="g-sub" style="font-size:13px">${res.y ? `${res.y} · ` : ''}${esc(r.emoji)} ${esc(r.cat)}</div>
        <div class="links"><button class="btn gbtn" data-a="g-play" style="padding:7px 14px;flex-direction:row"><span id="pp">⏸️</span>Tema</button><a href="${esc(yt)}" target="_blank" rel="noopener">▶ YouTube</a></div>`);
    },
    final() {
      const sc = calcScores(), w = sc[0] === sc[1] ? null : (sc[0] > sc[1] ? 0 : 1);
      const side = (i, pos) => dSide(i, pos, `<div class="dfin"><div class="trophy">${w === i ? '🏆' : w == null ? '🤝' : '😅'}</div>
          <div class="winner">${w === i ? '¡Ganaste!' : w == null ? '¡Empate!' : '¡Revancha!'}</div>
          <div class="sub">${dName(0)} ${sc[0]} — ${sc[1]} ${dName(1)}</div></div>`);
      return `<canvas id="confetti"></canvas>` + duelWrap(side, `<div class="g-actions" style="grid-template-columns:1fr 1fr 1fr;width:100%">
          <button class="btn gbtn" data-a="g-again"><span>🔁</span>Revancha</button>
          <button class="btn gbtn" data-a="g-share"><span>📤</span>Compartir</button>
          <button class="btn gbtn" data-a="g-exit"><span>🏠</span>Salir</button></div>`);
    }
  };

  function rankOrder() {
    const sc = calcScores();
    const order = G.players.map((p, i) => ({ p, i, s: sc[i] })).sort((a, b) => b.s - a.s || a.i - b.i);
    let pos = 0, prev = null;
    order.forEach((o, k) => { if (o.s !== prev) { pos = k + 1; prev = o.s; } o.pos = pos; });
    return order;
  }

  function renderGame() {
    if (!G) return;
    const keep = {};
    ['.final', '.buzz'].forEach(s => { const e = $(s, gameEl); if (e) keep[s] = e.scrollTop; });
    gameEl.className = 'game ph-' + G.phase + (G.mode === 'duel' && DUEL[G.phase] ? ' duelmode' : '');
    gameEl.innerHTML = (G.mode === 'duel' && DUEL[G.phase] ? DUEL[G.phase] : GV[G.phase])();
    Object.keys(keep).forEach(s => { const e = $(s, gameEl); if (e) e.scrollTop = keep[s]; });
    paintClip();
  }

  function shareResults() {
    let txt;
    if (G.players.length < 2) {
      const hit = G.rounds.filter(r => r.winner === 0).length;
      txt = `🎵 Musiquita: adiviné ${hit} de ${G.rounds.length} canciones${G.best > 1 ? ` (racha de ${G.best} 🔥)` : ''}.\n¿Me ganás?`;
    } else {
      const order = rankOrder(), medals = ['🥇', '🥈', '🥉'];
      txt = `🎵 Musiquita · ${G.rounds.length} canciones\n` + order.map(o => `${medals[o.pos - 1] || o.pos + '.'} ${o.p} — ${o.s}`).join('\n') + '\n\n¿Qué canción es? 🎧';
    }
    if (navigator.share) navigator.share({ text: txt }).catch(() => { });
    else if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => toast('Resultados copiados 📋'));
  }

  function confetti() {
    const cv = $('#confetti'); if (!cv) return;
    const dpr = window.devicePixelRatio || 1, w = cv.clientWidth, h = cv.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    const ctx = cv.getContext('2d'); ctx.scale(dpr, dpr);
    const cols = ['#75aadb', '#f6b40e', '#ffffff', '#ef5b5f', '#35b47b'];
    const ps = Array.from({ length: 110 }, () => ({ x: Math.random() * w, y: -20 - Math.random() * h * .6, vx: (Math.random() - .5) * 2.2, vy: 2 + Math.random() * 3.5, s: 5 + Math.random() * 7, r: Math.random() * 6, vr: (Math.random() - .5) * .3, c: cols[rand(cols.length)] }));
    let f = 0;
    (function frame() {
      if (!G || G.phase !== 'final' || !cv.isConnected) return;
      ctx.clearRect(0, 0, w, h);
      ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
      if (++f < 260) requestAnimationFrame(frame); else ctx.clearRect(0, 0, w, h);
    })();
  }

  /* ======================================================================
     ACCIONES
     ====================================================================== */
  const A = {
    tab(el) { UI.tab = el.dataset.t; render(false); $('#view').focus({ preventScroll: true }); },
    'hide-install'() { S.hideInstall = true; save(); render(); },
    start: startGame,

    'rm-player'(el) { S.players.splice(+el.dataset.i, 1); save(); render(); },
    step(el) {
      const k = el.dataset.k, arr = OPT[k], d = +el.dataset.d;
      let i = arr.indexOf(S.settings[k]);
      if (i < 0) i = 0;
      S.settings[k] = arr[Math.max(0, Math.min(arr.length - 1, i + d))];
      save(); render();
    },
    preset(el) { S.settings[el.dataset.k] = +el.dataset.v; save(); render(); },
    seg(el) { S.settings[el.dataset.k] = el.dataset.v; save(); if (el.dataset.k === 'theme') applyTheme(); render(); },
    toggle(el) { S.settings[el.dataset.k] = !S.settings[el.dataset.k]; save(); render(); },

    expand(el) { UI.open = UI.open === el.dataset.id ? null : el.dataset.id; render(); },
    'cat-toggle'(el) { const id = el.dataset.id; if (S.off[id]) delete S.off[id]; else S.off[id] = true; save(); render(); },
    'cats-all'() { S.off = {}; save(); render(); },
    'cats-none'() { allCats().forEach(c => { S.off[c.id] = true; }); save(); render(); },
    'toggle-item'(el) {
      const c = allCats().find(x => x.id === el.dataset.c); if (!c) return;
      const k = ikey(c.id, c.items[+el.dataset.i]);
      if (S.excluded[k]) delete S.excluded[k]; else S.excluded[k] = 1;
      save(); render();
    },
    'reset-items'(el) {
      const c = allCats().find(x => x.id === el.dataset.id); if (!c) return;
      c.items.forEach(it => { delete S.excluded[ikey(c.id, it)]; });
      save(); render();
    },
    'new-cat'() { catEditor(); },
    'edit-cat'(el) { catEditor(el.dataset.id); },
    'del-cat'(el) {
      const id = el.dataset.id, c = S.custom.find(x => x.id === id); if (!c) return;
      ask('¿Borrar “' + esc(c.name) + '”?', 'Se pierden los temas que cargaste.', [
        { t: 'Sí, borrar', cls: 'red', fn: () => { S.custom = S.custom.filter(x => x.id !== id); delete S.off[id]; UI.open = null; save(); closeSheet(); render(); } },
        { t: 'Cancelar', cls: 'ghost', fn: closeSheet }
      ]);
    },
    'save-cat'(el) {
      const name = $('#ce-name').value.trim(), emoji = ($('#ce-emoji').value.trim() || '⭐').slice(0, 4), text = $('#ce-text').value;
      const n = parseItems(text).length;
      if (!name) return toast('Ponele un nombre a la playlist');
      if (!n) return toast('Agregá al menos una canción (Artista|Canción)');
      const id = el.dataset.id;
      if (id) { const c = S.custom.find(x => x.id === id); Object.assign(c, { name, emoji, text }); }
      else { const nid = 'c_' + Date.now().toString(36); S.custom.push({ id: nid, name, emoji, text }); UI.open = nid; }
      save(); closeSheet(); render(); toast('¡Playlist guardada! ✅');
    },

    'clear-hist'() { ask('¿Borrar el historial?', 'Se borra el ranking y las partidas guardadas.', [{ t: 'Sí, borrar', cls: 'red', fn: () => { S.history = []; save(); closeSheet(); render(); } }, { t: 'Cancelar', cls: 'ghost', fn: closeSheet }]); },
    'reset-seen'() { S.seen = {}; save(); render(); toast('Listo, todas las canciones vuelven al sorteo 🎲'); },
    'reset-all'() { ask('¿Restablecer todo?', 'Se borran jugadores, ajustes, playlists propias e historial.', [{ t: 'Sí, restablecer', cls: 'red', fn: () => { S = defaults(); save(); applyTheme(); closeSheet(); render(); } }, { t: 'Cancelar', cls: 'ghost', fn: closeSheet }]); },

    'close-sheet'(el, e) { if (e.target === el) closeSheet(); },
    'sheet-btn'(el) { const f = sheetFns[+el.dataset.i]; if (f) f(); },

    /* juego */
    'g-sound'() { S.settings.sound = !S.settings.sound; save(); renderGame(); if (S.settings.sound) { unlockAudio(); sfx.pick(); } },
    'g-repeat': repeatClip,
    'g-more': extendClip,
    'g-hint': useHint,
    'g-buzz'(el) { buzz(+el.dataset.i); },
    'g-judge'(el) { judge(el.dataset.k); },
    'g-choose'(el) { choose(+el.dataset.i); },
    'g-reveal'() { if (G.phase === 'listen' || G.phase === 'options') { const r = curRound(); if (G.mode === 'turns') r.picked = -2; reveal(null); } },
    'g-play'() { if (au.paused) { if (au.ended) au.currentTime = 0; au.play().catch(() => { }); } else au.pause(); },
    'g-next': afterReveal,
    'g-retry'() { nextRound(); },
    'g-again'() { const was = G; exitGame(); if (was) startGame(); },
    'g-share': shareResults,
    'g-exit': exitGame,
    'g-quit'() {
      if (G.phase === 'final') return exitGame();
      const wasPlaying = !au.paused; if (wasPlaying) au.pause();
      const resume = () => { closeSheet(); if (wasPlaying && G && (G.phase === 'listen' || G.phase === 'options' || G.phase === 'reveal')) au.play().catch(() => { }); };
      const btns = [];
      const done = G.rounds.filter(r => r.winner != null).length;
      if (done > 0) btns.push({ t: '🏁 Terminar y ver resultados', fn: () => { closeSheet(); endEarly(); } });
      btns.push({ t: 'Salir sin guardar', cls: 'red', fn: () => { exitGame(); } });
      btns.push({ t: 'Seguir jugando', cls: 'ghost', fn: resume });
      ask('¿Salir de la partida?', '', btns);
    }
  };

  function catEditor(id) {
    const c = id ? S.custom.find(x => x.id === id) : null;
    openSheet(`<h3>${c ? 'Editar playlist' : 'Nueva playlist'}</h3>
      <p>Una canción por línea, con el formato <b>Artista|Canción</b>. La app busca el audio sola.</p>
      <div class="grid2"><div><label class="f" style="margin-top:0">Emoji</label><input type="text" id="ce-emoji" maxlength="4" value="${esc(c ? c.emoji : '⭐')}" style="text-align:center;width:100%"></div>
        <div><label class="f" style="margin-top:0">Nombre</label><input type="text" id="ce-name" maxlength="30" placeholder="Ej: Nuestra playlist" value="${esc(c ? c.name : '')}" style="width:100%"></div></div>
      <label class="f">Canciones</label>
      <textarea id="ce-text" placeholder="Soda Stereo|De Música Ligera&#10;Duki|She Don't Give a FO&#10;Queen|Bohemian Rhapsody" autocapitalize="sentences">${esc(c ? c.text : '')}</textarea>
      <button class="btn" data-a="save-cat" ${c ? `data-id="${esc(c.id)}"` : ''}>Guardar</button>
      <button class="btn ghost" data-a="sheet-btn" data-i="0">Cancelar</button>`);
    sheetFns = [closeSheet];
  }

  const FORMS = {
    player(f) {
      const inp = f.elements.n, name = inp.value.trim().replace(/\s+/g, ' ');
      if (!name) return;
      if (S.players.length >= MAX_PLAYERS) return toast(`Máximo ${MAX_PLAYERS} jugadores`);
      if (S.players.some(p => p.toLowerCase() === name.toLowerCase())) { inp.value = ''; return toast('Ya hay alguien con ese nombre'); }
      S.players.push(name); save(); render();
      const i = $('input[name=n]'); if (i) i.focus();
    }
  };

  /* ---------------------------- eventos ---------------------------- */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-a]');
    if (!el || el.disabled) return;
    const fn = A[el.dataset.a];
    if (fn) { fn(el, e); }
  });
  document.addEventListener('touchstart', () => { }, { passive: true }); // activa :active en iOS
  const peekOff = () => $$('.peekbtn.on').forEach(b => b.classList.remove('on'));
  document.addEventListener('pointerdown', e => { const b = e.target.closest && e.target.closest('.peekbtn'); if (b) b.classList.add('on'); });
  ['pointerup', 'pointercancel', 'touchend', 'touchcancel', 'blur'].forEach(ev => document.addEventListener(ev, peekOff, true));
  document.addEventListener('contextmenu', e => { if (e.target.closest && e.target.closest('.peekbtn')) e.preventDefault(); });
  document.addEventListener('input', e => {
    if (e.target.id !== 'q') return;
    UI.q = e.target.value;
    const l = $('#catlist'); if (l) l.innerHTML = catListHTML();
  });
  document.addEventListener('submit', e => {
    const f = e.target.closest('[data-form]');
    if (!f) return;
    e.preventDefault();
    FORMS[f.dataset.form](f);
  });
  // si el tema termina solo (o se corta), actualizamos el botón de play de la pantalla de resultado
  const syncPlayUI = () => {
    const playing = !au.paused && !au.ended;
    const pp = $('#pp'); if (pp) pp.textContent = playing ? '⏸️' : '▶️';
    const a = $('#art'); if (a) a.classList.toggle('playing', playing);
  };
  ['play', 'pause', 'ended'].forEach(ev => au.addEventListener(ev, syncPlayUI));
  au.addEventListener('error', async () => {
    if (!G || G.fresh || !(G.phase === 'listen' || G.phase === 'options') || !G.rounds.length) return;
    G.fresh = true; // el link pudo haber vencido: se busca de nuevo una sola vez
    const r = curRound(), res = await getAudio(r.song, true);
    if (res && G && curRound() === r) { r.res = res; loadAndPlay(res.u, G.clipStart); }
  });

  /* ---------------------------- arranque ---------------------------- */
  applyTheme();
  render(false);

  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { }));
  }
})();
