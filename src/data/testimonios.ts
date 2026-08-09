export interface Testimonio {
  quote: string;
  name: string;
  role: string;
}

export const testimonios: Testimonio[] = [
  {
    quote:
      'Pasé de un 480 a un 780 en M1. Jose explica con una calma que hace que todo tenga sentido.',
    name: 'Valentina R.',
    role: 'PAES 2025',
  },
  {
    quote:
      'Me salvó en Cálculo I. Las clases online son súper cómodas y siempre quedo con los apuntes.',
    name: 'Matías O.',
    role: 'U. de Chile',
  },
  {
    quote: 'Mi hija por fin le perdió el miedo a la matemática. Muy paciente y ordenada.',
    name: 'Carolina M.',
    role: 'Apoderada',
  },
  {
    quote:
      'El intensivo PAES me ordenó en las últimas semanas. Los ensayos cronometrados marcaron la diferencia.',
    name: 'Ignacio T.',
    role: 'PAES 2025',
  },
];
