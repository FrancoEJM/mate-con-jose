# Mate con Jose

Sitio de clases particulares de matemática (PAES y universidad). Astro estático, sin backend ni
base de datos.

```bash
npm install
npm run dev
```

Queda en `http://localhost:4321`. Se actualiza solo al guardar un archivo.

| Comando         | Para qué                                                     |
| --------------- | ------------------------------------------------------------ |
| `npm run dev`   | Ver el sitio mientras se edita                                |
| `npm run build` | Generar el sitio final en `dist/`                             |
| `npm run preview` | Ver el resultado de `build` como se verá publicado          |
| `npm run check` | Revisar que no haya errores de tipos ni contenido inválido    |

---

# Cómo agregar contenido

Todo lo que se publica está en **`src/content/`**. Son archivos de texto: se editan, se guardan y
el sitio se actualiza solo. No hay que tocar código.

Cada archivo empieza con instrucciones comentadas (las líneas que parten con `#`). Si algo queda
mal escrito, `npm run dev` lo dice en pantalla con el archivo y el campo exactos — no publica algo
roto.

**Regla de oro:** los espacios del principio de cada línea importan. Lo más seguro es copiar un
bloque que ya existe y cambiarle los datos.

## Un video nuevo

1. Abre `src/content/videos.yaml`.
2. Copia un bloque completo (desde el `- id:` hasta la última línea) y pégalo abajo.
3. Cambia el `id` (nombre corto, sin espacios ni tildes, distinto a los demás), el `titulo`, el
   `tema` y el `url`.

```yaml
- id: paes-m1-f111-10
  titulo: Ejercicio 10 PAES M1 · Forma 111
  categoria: PAES
  tema: Números
  url: https://www.instagram.com/p/XXXXXXXX/
  articulo: ''
```

El `url` sale del botón **Compartir → Copiar enlace** de Instagram. Sirven tanto los links `/p/`
como los `/reel/`. Solo se incrustan publicaciones de Instagram, que son las únicas que muestran
la vista previa dentro de la página; con cualquier otro link la tarjeta se ve igual pero lleva al
video en lugar de reproducirlo.

Los temas válidos por categoría están en `src/data/temas.ts`. Si quieres uno nuevo, agrégalo ahí
primero y después úsalo en el video.

`fecha` y `duracion` son opcionales. La duración es el tiempo de lectura del artículo, así que solo
se muestra cuando el video tiene uno.

Los filtros y el buscador aparecen solos cuando hay más de 3 videos.

## Un resumen visual nuevo

1. Deja la imagen en `public/img/resumenes/`.
2. Abre `src/content/resumenes.yaml` y copia el bloque que ya está.

```yaml
- id: logaritmos
  titulo: Propiedades de logaritmos
  imagenes:
    - src: /img/resumenes/logaritmos-1.jpg
      alt: 'Resumen visual: propiedades de logaritmos'
    - src: /img/resumenes/logaritmos-2.jpg
      alt: 'Resumen visual: ejemplos de logaritmos'
```

Un resumen puede tener **varias imágenes**: agrega más pares `- src:` / `alt:` bajo `imagenes`. En
la sección se ve la primera con una marca que indica cuántas hay, y al pincharla se abren todas
como un carrusel que se desliza hacia el lado, igual que en Instagram.

El `alt` es la descripción para quien no puede ver la imagen (lectores de pantalla, o si la imagen
no carga). Una frase diciendo de qué se trata.

## Un testimonio nuevo

`src/content/testimonios.yaml`. Copia un bloque y cambia `texto`, `nombre` y `detalle`. Las
comillas que se ven en la página las pone el sitio; no hay que escribirlas.

## Una explicación nueva en el blog

1. Crea un archivo en `src/content/articulos/`, por ejemplo `logaritmos.md`.
2. Copia la cabecera de `ecuaciones-cuadraticas.md` (todo lo que va entre las dos líneas de `---`)
   y cámbiale los datos.
3. Escribe abajo con Markdown: `## Título`, `**negrita**`, `*cursiva*`, listas con `-`.

Queda publicado en `/videos/logaritmos/`. Para que aparezca el botón "Ver ejercicio" en la tarjeta
de un video, pon `articulo: logaritmos` en ese video dentro de `videos.yaml` (y ahí sí conviene
llenarle la `duracion`).

### Fórmulas

Dentro del texto, entre signos peso: `la fórmula $ax^2 + bx + c = 0$ se usa...`

Centrada y grande, con `$$` **en líneas aparte**:

```markdown
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

Hay dos cajas de color, copiándolas tal cual del artículo de ejemplo: la del enunciado (con `>` al
principio de cada línea) y la de la solución (`<div class="solucion">`).

## Programas, precios y datos de contacto

| Qué                                          | Archivo                        |
| -------------------------------------------- | ------------------------------ |
| Los tres programas, su contenido y sus valores | `src/content/programas.yaml`   |
| Valor de la clase suelta y del pack de nivelación | `src/data/precios.ts`       |
| WhatsApp, correo, Instagram, TikTok           | `src/data/sitio.ts`            |
| Los temas de los filtros de videos            | `src/data/temas.ts`            |
| Los enlaces del menú de arriba                | `src/data/sitio.ts`            |

Cada programa arma solo su mensaje de WhatsApp con su propio nombre, así que al cambiar el `titulo`
en `programas.yaml` cambia también el mensaje.

Para cambiar el PDF descargable de un programa: deja el archivo en `public/pdf/` y apunta el campo
`pdf:` a `/pdf/nombre-del-archivo.pdf`.

## Fotos e imágenes

| Carpeta                 | Qué va ahí                            |
| ----------------------- | ------------------------------------- |
| `public/img/sitio/`     | Logo y códigos QR                     |
| `public/img/resumenes/` | Las imágenes de los resúmenes         |
| `public/pdf/`           | Los programas descargables            |

En los archivos de contenido, la ruta se escribe sin el `public`: una imagen guardada en
`public/img/resumenes/x.jpg` se escribe `/img/resumenes/x.jpg`.

## Guardar los cambios

El sitio **todavía no está publicado en internet**: por ahora solo corre en el computador y el
código vive en GitHub. Para guardar lo editado:

```bash
npm run build
```

Si eso termina sin errores, el contenido está bien escrito. Después:

```bash
git add .
git commit -m "Agrego ejercicio 10"
git push
```

---

# Estructura

```
src/
  content/       ← el contenido editable
    videos.yaml
    resumenes.yaml
    testimonios.yaml
    programas.yaml
    articulos/          una explicación del blog por archivo .md
  content.config.ts     qué campos lleva cada archivo de contenido
  data/          precios, contacto y la lista de temas
  components/    una sección de la página por archivo
  layouts/       Base.astro (armazón) y Articulo.astro (posts con fórmulas)
  pages/
    index.astro           la portada
    videos/[slug].astro   genera una página por cada artículo
  styles/global.css       colores y estilos compartidos
public/
  img/sitio/ · img/resumenes/ · pdf/
```

## Notas técnicas

- El contenido usa *content collections* de Astro con validación Zod: `src/content.config.ts`
  define qué campos son obligatorios y de qué tipo, así que un archivo mal escrito falla el build
  en vez de publicarse a medias.
- Toda la interactividad es JavaScript suelto, sin framework. Modales, menú y visor de resúmenes
  usan `<dialog>` nativo (Escape, foco atrapado y fondo oscuro gratis); los carruseles usan
  `scroll-snap` de CSS.
- Los carruseles miden sus tarjetas en `%` del contenedor, no en `vw`, para que el sobrante que
  dejan la tarjeta central y el `gap` siempre alcance para que las vecinas asomen.
- KaTeX renderiza las fórmulas durante el build: el HTML sale con las fórmulas listas y no se
  descarga JavaScript de matemática en el navegador.
- Escritorio y móvil se distinguen con media queries de CSS, no con JavaScript, así que no hay
  parpadeo al cargar.
- Sin JavaScript la página se ve completa: las animaciones de aparición solo se activan si el
  script del `<head>` alcanzó a marcar `<html class="js">`.
- Las imágenes del visor de resúmenes pasan a `eager` al abrirlo. Dentro de un `<dialog>` cerrado
  las imágenes `lazy` nunca se descargan, y sin ellas la tira no tiene ancho que desplazar.
- Los iconos de marca del pie son SVG en línea de [Simple Icons](https://simpleicons.org) (CC0).
