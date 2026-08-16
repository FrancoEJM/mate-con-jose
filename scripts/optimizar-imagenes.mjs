/**
 * Reduce las imágenes de public/img/ sobrescribiendo el mismo archivo: mantiene
 * nombre y extensión, así que no hay que tocar ninguna ruta del contenido.
 *
 * Ejecutar con `npm run optimizar` cada vez que entren imágenes nuevas.
 * Es destructivo, pero los originales están en git: `git checkout public/img`.
 *
 * ponytail: sharp viene con Astro, no agrega peso al proyecto.
 */
import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

/** Ancho máximo por carpeta. Las imágenes más angostas se dejan como están. */
const REGLAS = [
  { carpeta: 'public/img/sitio', archivo: 'favicon.png', ancho: 180 },
  { carpeta: 'public/img/sitio', archivo: 'logo.png', ancho: 500 },
  { carpeta: 'public/img/sitio', archivo: 'qr-instagram.png', ancho: 600 },
  { carpeta: 'public/img/sitio', archivo: 'qr-tiktok.png', ancho: 600 },
  // Los resúmenes se descargan para imprimir: 1400 px alcanza de sobra.
  { carpeta: 'public/img/resumenes', ancho: 1400 },
];

const kb = (n) => Math.round(n / 1024);

async function objetivos() {
  const lista = [];
  for (const regla of REGLAS) {
    if (regla.archivo) {
      lista.push({ ruta: join(regla.carpeta, regla.archivo), ancho: regla.ancho });
      continue;
    }
    for (const nombre of await readdir(regla.carpeta)) {
      if (/\.(jpe?g|png)$/i.test(nombre)) {
        lista.push({ ruta: join(regla.carpeta, nombre), ancho: regla.ancho });
      }
    }
  }
  return lista;
}

let antes = 0;
let despues = 0;

for (const { ruta, ancho } of await objetivos()) {
  // Se lee a memoria antes de procesar: en Windows sharp deja el archivo tomado
  // y no se puede sobrescribir la misma ruta.
  const entrada = await readFile(ruta);
  const pesoOriginal = entrada.length;
  const img = sharp(entrada);
  const meta = await img.metadata();

  // withoutEnlargement evita agrandar una imagen que ya venía chica.
  let salida = img.resize({ width: ancho, withoutEnlargement: true });
  salida =
    extname(ruta).toLowerCase() === '.png'
      ? salida.png({ compressionLevel: 9, palette: true })
      : salida.jpeg({ quality: 82, mozjpeg: true });

  const buffer = await salida.toBuffer();

  antes += pesoOriginal;

  if (buffer.length >= pesoOriginal) {
    despues += pesoOriginal;
    console.log(`= ${ruta}  ${kb(pesoOriginal)} KB (ya estaba optimizada)`);
    continue;
  }

  await writeFile(ruta, buffer);
  despues += buffer.length;
  const nueva = await sharp(buffer).metadata();
  console.log(
    `↓ ${ruta}  ${kb(pesoOriginal)} → ${kb(buffer.length)} KB` +
      `  (${meta.width}×${meta.height} → ${nueva.width}×${nueva.height})`
  );
}

console.log(`\nTotal: ${kb(antes)} KB → ${kb(despues)} KB`);
