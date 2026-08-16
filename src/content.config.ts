import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

/**
 * Todo el contenido editable vive en src/content/.
 * Los .yaml son listas; los .md de articulos/ son las explicaciones del blog.
 * Si algo está mal escrito, `npm run dev` lo dice con el archivo y el campo exactos.
 */

const videos = defineCollection({
  loader: file('src/content/videos.yaml'),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(['PAES', 'Universidad']),
    tema: z.string(),
    /** ISO (2026-07-08). La página la muestra formateada en español. */
    fecha: z.coerce.date().optional(),
    /** Tiempo de lectura del artículo: solo se muestra si el video tiene uno. */
    duracion: z.string().optional(),
    url: z.string().url(),
    articulo: z.string().default(''),
  }),
});

const resumenes = defineCollection({
  loader: file('src/content/resumenes.yaml'),
  schema: z.object({
    titulo: z.string(),
    imagenes: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        })
      )
      .min(1),
  }),
});

const testimonios = defineCollection({
  loader: file('src/content/testimonios.yaml'),
  schema: z.object({
    texto: z.string(),
    nombre: z.string(),
    detalle: z.string(),
  }),
});

const programas = defineCollection({
  loader: file('src/content/programas.yaml'),
  schema: z.object({
    titulo: z.string(),
    duracion: z.string(),
    resumen: z.string(),
    descripcion: z.string(),
    bullets: z.array(z.string()),
    destacado: z.boolean().default(false),
    pdf: z.string().optional(),
    incluye: z.array(z.string()).optional(),
    plan: z
      .array(z.object({ eje: z.string(), semanas: z.number().positive() }))
      .optional(),
    valores: z
      .array(
        z.object({
          etiqueta: z.string(),
          monto: z.string(),
          detalle: z.string(),
          destacado: z.boolean().default(false),
        })
      )
      .optional(),
    valoresNota: z.string().optional(),
  }),
});

const articulos = defineCollection({
  loader: glob({ base: 'src/content/articulos', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().optional(),
    tags: z.array(z.string()),
    /** ISO (2026-07-08). Se muestra formateada y alimenta el datePublished del JSON-LD. */
    fecha: z.coerce.date(),
    duracion: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = { videos, resumenes, testimonios, programas, articulos };
