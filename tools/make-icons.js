// Genera los PNG de la app a partir de public/icons/icon.svg (usa Playwright/Chromium).
// Uso:  node tools/make-icons.js
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'public', 'icons');
const svg = fs.readFileSync(path.join(dir, 'icon.svg'), 'utf8');
const sizes = { 'icon-192.png': 192, 'icon-512.png': 512, 'icon-maskable-512.png': 512, 'apple-touch-icon.png': 180 };
(async () => {
  const b = await chromium.launch();
  for (const [name, s] of Object.entries(sizes)) {
    const p = await b.newPage({ viewport: { width: s, height: s }, deviceScaleFactor: 1 });
    await p.setContent(`<body style="margin:0">${svg.replace('<svg ', `<svg width="${s}" height="${s}" `)}</body>`);
    await p.screenshot({ path: path.join(dir, name), omitBackground: false });
    await p.close();
    console.log('ok', name);
  }
  await b.close();
})();
