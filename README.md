# Musiquita 🎵 — ¿Qué canción es?

PWA para adivinar canciones con amigos (pensada para iPhone, anda en cualquier celular).
Suena un fragmento de un tema, y gana el que más sabe. Sin build ni dependencias: HTML/CSS/JS estático.

## Cómo se juega
- **🔔 Buzzers** (2 o más jugadores): suena un fragmento y cada uno tiene su botón de color. El primero que toca frena la música y responde en voz alta (artista y canción). Quien maneja el celular marca **¡Clavó! (+2)**, **Casi (+1)** o **Falló** (queda bloqueado y sigue el resto).
- **🎯 Por turnos** (1 o más jugadores): a cada uno le toca una canción con 4 opciones. Se puede jugar solo y llevar racha.
- Se puede **repetir** el fragmento, **alargarlo 5 segundos** y pedir **pistas** (cantidad de palabras, letra inicial del artista, década).
- Al final de cada canción se ve la tapa del disco, el nombre, el año y links a YouTube / Apple Music.

## Catálogo
Más de 380 canciones (y creciendo) en 14 géneros (rock nacional, cumbia y cuarteto, trap argentino, pop argentino, reggaetón y latino, pop 2000s y actual, hits de la infancia, cine y Disney, 80s/90s, folklore y tango, mundial y cancha, electrónica…).
Desde la app se pueden activar/desactivar géneros, sacar temas puntuales y crear **playlists propias** (`Artista|Canción`, una por línea).

## De dónde sale la música
Los fragmentos son los **previews de 30 segundos** de la API pública de iTunes / Apple Music (sin cuentas ni claves).
La app necesita internet para escuchar; abre sin conexión pero sin música no hay juego.

- `public/data.js` — catálogo (`Artista|Canción`).
- `public/resolve.js` — busca cada tema en iTunes (se usa en el navegador y en el script de validación).
- `public/resolved.json` — audio/tapa/año ya resueltos para todo el catálogo (así la app no depende de buscar en vivo; si un link vence, se busca de nuevo solo).
- `tools/data.full.js` — la lista completa de canciones candidatas (acá se agregan temas nuevos).
- `tools/validate.js` — busca cada tema en iTunes y guarda el resultado en `tools/.resolved-cache.json` (retoma donde quedó; la API limita ~20 pedidos por minuto).
- `tools/build.js` — arma `public/data.js` y `public/resolved.json` **solo con los temas que tienen audio confirmado**.

```bash
# 1) validar los temas nuevos (tarda) y 2) armar el catálogo publicable
node tools/validate.js
node tools/build.js
# detrás de un proxy:  NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/ruta/ca.crt node tools/validate.js
```

## Deploy en Vercel
Importá el repo en Vercel: `vercel.json` ya apunta a `public/` y no hay build.
En el iPhone: Safari → Compartir → **Agregar a pantalla de inicio**.

Si cambiás archivos de `public/`, subí `VERSION` en `public/sw.js` para que los celulares actualicen el caché.
Para regenerar los íconos: `node tools/make-icons.js` (requiere Playwright).

## Aviso
Los fragmentos pertenecen a sus sellos y artistas y se reproducen vía la API pública de previews de Apple. Proyecto personal, sin fines comerciales.
