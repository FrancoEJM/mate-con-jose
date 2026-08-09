export const sitio = {
  nombre: "Mate con Jose",
  autora: "Josefina Vergara",
  descripcion:
    "Clases particulares de matemática para PAES y universidad. Aprende con calma, claridad y método.",
  telefono: "+569 3572 0993",
  whatsapp: "56935720993",
  email: "josefinavalderas42@gmail.com",
  instagram: "mateconjose",
  tiktok: "mateconjosee",
};

/** Link de WhatsApp con el mensaje ya escrito. */
export function wa(mensaje: string): string {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const waAgendar = wa(
  "¡Hola Josefina! Quiero agendar una clase de matemática.",
);

export const navegacion = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#videos", label: "Videos" },
  { href: "#resumenes", label: "Resúmenes" },
  { href: "#contacto", label: "Contacto" },
];
