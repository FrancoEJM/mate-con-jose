export interface Resumen {
  id: string;
  src: string;
  title: string;
  alt: string;
  download: string;
}

export const resumenes: Resumen[] = [
  {
    id: 'potencias',
    src: '/assets/resumen-potencias.png',
    title: 'Propiedades de potencias',
    alt: 'Resumen visual: propiedades de potencias',
    download: 'resumen-propiedades-de-potencias.png',
  },
];
