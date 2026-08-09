export const sitio = {
  nombre: 'Mate con José',
  autora: 'Josefina Vergara',
  descripcion:
    'Clases particulares de matemática para PAES y universidad. Aprende con calma, claridad y método.',
  telefono: '+569 3572 0993',
  whatsapp: '56935720993',
  email: 'hola@mateconjose.cl',
  instagram: 'mateconjose',
  tiktok: 'mateconjosee',
  calendly: 'https://calendly.com/matejose/clase',
  ciudad: 'Santiago, Chile',
};

/** Link de WhatsApp con mensaje prellenado. */
export function wa(mensaje: string): string {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const waAgendar = wa('¡Hola Josefina! Quiero agendar una clase de matemática.');

export const navegacion = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#videos', label: 'Videos' },
  { href: '#resumenes', label: 'Resúmenes' },
  { href: '#contacto', label: 'Contacto' },
];
