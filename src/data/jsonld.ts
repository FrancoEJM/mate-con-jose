import { sitio } from "./sitio";
import { fechaISO } from "./fechas";

/**
 * Datos estructurados para que Google entienda qué es el sitio en vez de adivinar
 * a partir del texto. https://schema.org
 */

/**
 * Serializa para incrustar en un <script>. Escapa "<" porque un "</script>" dentro
 * de cualquier texto cerraría la etiqueta antes de tiempo.
 */
export function serializarJsonLd(dato: unknown): string {
  return JSON.stringify(dato).replace(/</g, "\\u003c");
}

export function negocioJsonLd(site: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": new URL("#negocio", site).href,
    name: sitio.nombre,
    description: sitio.descripcion,
    url: site.href,
    image: new URL("/img/sitio/logo.png", site).href,
    telephone: `+${sitio.whatsapp}`,
    email: sitio.email,
    serviceType: "Clases particulares de matemática",
    areaServed: [
      { "@type": "City", name: "Valdivia" },
      { "@type": "Country", name: "Chile" },
    ],
    knowsAbout: [
      "Matemática",
      "PAES Competencia Matemática M1",
      "PAES Competencia Matemática M2",
      "Álgebra",
      "Cálculo",
      "Estadística",
      "Geometría",
      "Trigonometría",
      "Números",
      "Funciones",
    ],
    sameAs: [
      `https://instagram.com/${sitio.instagram}`,
      `https://tiktok.com/@${sitio.tiktok}`,
    ],
    provider: {
      "@type": "Person",
      name: sitio.autora,
      jobTitle: "Profesora de matemática",
    },
  };
}

/** La ficha de un artículo del blog. */
export function articuloJsonLd(
  site: URL,
  datos: {
    titulo: string;
    descripcion?: string;
    fecha: Date;
    url: string;
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: datos.titulo,
    description: datos.descripcion,
    datePublished: fechaISO(datos.fecha),
    inLanguage: "es-CL",
    image: new URL("/img/sitio/logo.png", site).href,
    author: { "@type": "Person", name: sitio.autora },
    publisher: {
      "@type": "Organization",
      name: sitio.nombre,
      logo: {
        "@type": "ImageObject",
        url: new URL("/img/sitio/logo.png", site).href,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": datos.url },
  };
}
