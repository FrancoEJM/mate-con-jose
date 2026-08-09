# Mate con Jose

Sitio de clases particulares de matemática (PAES y universidad), portado desde el proyecto de
Claude Design a Astro.

```bash
npm install
npm run dev
```

`npm run build` genera el sitio estático en `dist/`. No hay SSR ni backend: se puede publicar tal
cual en Netlify, Vercel, Cloudflare Pages o GitHub Pages.

## ⚠️ Faltan 4 imágenes

`public/assets/` tiene el PDF del programa, pero **no** los PNG: el MCP de Claude Design corta los
archivos en 256 KiB y los cuatro pesan más. Descárgalos desde el proyecto de diseño y déjalos aquí
con estos nombres exactos:

| Archivo                               | Dónde se usa                   |
| ------------------------------------- | ------------------------------ |
| `public/assets/logo.png`              | nav, hero, footer, favicon, OG |
| `public/assets/qr-instagram.png`      | footer                         |
| `public/assets/qr-tiktok.png`         | footer                         |
| `public/assets/resumen-potencias.png` | sección Resúmenes + lightbox   |

## Estructura

```
src/
  data/          Contenido editable: videos, testimonios, programas, precios, contacto
  components/    Una sección de la página por archivo
  layouts/       Base.astro (portada) y Articulo.astro (posts con LaTeX)
  pages/
    index.astro                        portada
    videos/ecuaciones-cuadraticas.md   artículo
  styles/global.css                    paleta y utilidades compartidas
```

### Editar contenido

Casi todo vive en `src/data/`:

- **`sitio.ts`** — WhatsApp, email, redes, link de Calendly.
- **`videos.ts`** — tarjetas de la sección Videos. `url` acepta YouTube, TikTok o Instagram
  (`VideoEmbed.astro` detecta la plataforma). Los links cortos de TikTok, `vt.tiktok.com/...`, no
  se pueden incrustar: muestran una tarjeta que lleva a la app. Para incrustarlo de verdad hace
  falta la URL larga (`tiktok.com/@usuario/video/123...`). `href` apunta al artículo escrito, o
  `'#'` si todavía no existe.
- **`programas.ts`** — los tres programas, valores y el plan semanal. Precios de clase suelta y
  del pack de nivelación.
- **`testimonios.ts`**, **`resumenes.ts`** — listas simples.

### Agregar un artículo

Crea `src/pages/videos/<slug>.md` copiando el frontmatter del existente y apunta el `href` del
video correspondiente en `videos.ts` a `/videos/<slug>/`.

Las fórmulas usan LaTeX: `$...$` inline y `$$` **en línea propia** para bloque:

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

KaTeX se renderiza en el build, así que el HTML ya sale con las fórmulas listas y no se carga
JavaScript de matemática en el cliente.

## Notas de la migración

- El runtime de Claude Design (`support.js`) lo reemplaza Astro. `image-slot.js` era el
  placeholder drag & drop de la herramienta de diseño y no aplica en producción, así que los dos
  slots vacíos de "Suelta un nuevo resumen" no se portaron: para agregar resúmenes se agregan
  entradas en `resumenes.ts`.
- Toda la interactividad es JavaScript suelto, sin framework: modales y lightbox usan `<dialog>`
  nativo (Escape, focus trap y backdrop gratis) y los carruseles usan `scroll-snap` de CSS.
- El cambio escritorio/móvil pasó de `matchMedia` en JS a media queries en CSS, así que no hay
  parpadeo al cargar.
- Sin JavaScript la página se ve completa: las animaciones de aparición solo se activan si el
  script inline del `<head>` alcanzó a marcar `<html class="js">`.
