# Mate con Jose

Sitio de clases particulares de matemática (PAES y universidad) de Josefina Vergara. Astro
estático, sin backend ni base de datos. En producción en <https://mateconjose.cl>, desplegado con
Cloudflare Workers (`wrangler.jsonc` sirve `./dist` como assets estáticos; el build lo dispara
Workers Builds al pushear).

```bash
npm install
npm run dev
```

| Comando           | Para qué                                                  |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`                 |
| `npm run build`   | Genera el sitio en `dist/`                                 |
| `npm run preview` | Sirve `dist/` como se verá publicado                       |
| `npm run check`   | Tipos + validación de las colecciones de contenido         |
| `npm run optimizar` | Re-comprime las imágenes de `public/img/` en su lugar    |

## Estructura

```
src/
  content/              contenido, validado por src/content.config.ts
    videos.yaml           tarjetas de la sección Videos
    resumenes.yaml        imágenes descargables (una o varias por resumen)
    testimonios.yaml
    programas.yaml        los tres programas, su contenido y sus valores
    articulos/*.md        explicaciones del blog, con LaTeX
  data/                 config que no es contenido
    sitio.ts              contacto, redes, token de analítica
    precios.ts            clase suelta y pack de nivelación
    temas.ts              temas de los filtros de video
    fechas.ts             formateo ISO → "8 jul 2026"
    jsonld.ts             datos estructurados schema.org
  components/           una sección de la portada por archivo
  layouts/              Base.astro (armazón) · Articulo.astro (posts)
  pages/
    index.astro
    videos/[slug].astro   una página por cada .md de articulos/
  styles/global.css     tokens de color y utilidades compartidas
public/
  img/sitio/ · img/resumenes/ · pdf/ · robots.txt
scripts/optimizar-imagenes.mjs
```

## Contenido

Las colecciones usan el loader `file()`/`glob()` de Astro con esquemas Zod en
`src/content.config.ts`: un campo mal escrito rompe el build en vez de publicarse a medias.

- **Videos** (`videos.yaml`) — solo se incrustan publicaciones de Instagram (`/p/` o `/reel/`), que
  son las únicas que muestran preview embebido; con cualquier otra URL `VideoEmbed.astro` cae a una
  tarjeta que enlaza al original. `articulo` es el slug de un `.md` de `articulos/`; si está vacío
  no se pinta el botón "Ver ejercicio" ni el tiempo de lectura. Los filtros y el buscador aparecen
  solos sobre 3 videos.
- **Resúmenes** (`resumenes.yaml`) — `imagenes` es un array; con más de una, la grilla muestra un
  badge con el total y el visor se convierte en carrusel.
- **Artículos** (`articulos/*.md`) — `fecha` va en ISO (`2026-07-08`) y se muestra formateada con
  `formatearFecha()`; ese mismo valor alimenta el `datePublished` del JSON-LD. Fórmulas con `$…$`
  inline y `$$` **en líneas aparte** para bloque.

## SEO

- `@astrojs/sitemap` genera `sitemap-index.xml`; `public/robots.txt` lo referencia.
- `Base.astro` emite el set completo de Open Graph. Sin etiquetas de Twitter: no hay cuenta.
- JSON-LD desde `src/data/jsonld.ts`: `ProfessionalService` en la portada (área Valdivia + Chile),
  `BlogPosting` en cada artículo. Se pasa por la prop `jsonLd` de `Base.astro`.
- **No se marcan los testimonios como `Review`**: Google ignora las reseñas que un negocio publica
  sobre sí mismo, así que no producirían estrellas.

## Analítica

Cloudflare Web Analytics, sin cookies ni banner de consentimiento. **No hay nada que instalar en
el código**: al estar el dominio en Cloudflare, el beacon se inyecta solo en las respuestas HTML de
la zona. Agregar el `<script>` a mano contaría cada visita dos veces.

Panel → Analytics & Logs → Web Analytics.

## Imágenes

`npm run optimizar` reduce en su lugar lo que hay en `public/img/`, manteniendo nombre y extensión
para no tocar rutas. Es destructivo: los originales se recuperan con `git checkout public/img`.
Anchos máximos en `REGLAS`, dentro del script.

## Notas de implementación

- Toda la interactividad es JavaScript suelto, sin framework. Modales, menú y visor de resúmenes
  usan `<dialog>` nativo; los carruseles, `scroll-snap` de CSS.
- Los carruseles miden sus tarjetas en `%` del contenedor, no en `vw`, para que el sobrante que
  dejan la tarjeta central y el `gap` alcance para que las vecinas asomen.
- KaTeX renderiza en build: el HTML sale con las fórmulas listas y el navegador solo baja los 4
  `.woff2` que necesita.
- Escritorio y móvil se separan con media queries, no con JavaScript, así que no hay parpadeo.
- Sin JavaScript la página se ve completa: el `opacity: 0` de las animaciones cuelga de
  `<html class="js">`, que pone un script inline en el `<head>`.
- Las imágenes del visor pasan a `eager` al abrirlo: dentro de un `<dialog>` cerrado las `lazy`
  nunca se descargan y la tira no tendría ancho que desplazar.
