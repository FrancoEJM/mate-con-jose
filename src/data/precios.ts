/** Clase suelta. */
export const clase = {
  precio: 12000,
  incluye: [
    'Clase 100% personalizada',
    'Resolución de ejercicios y dudas',
    'Fortalecimiento de puntos débiles',
    'Online o presencial',
  ],
};

/** Pack de nivelación: la persona elige cuántas clases con los botones − y +. */
export const nivelacion = {
  precioPorClase: 11000,
  min: 2,
  max: 20,
  inicial: 6,
  incluye: [
    'Diagnóstico inicial gratuito',
    'Progresión desde lo esencial',
    'Guías de práctica incluidas',
  ],
};

/** Colores de las barras del plan semanal, en orden. */
export const coloresPlan = ['#8b7cc8', '#5b4b8a', '#b5a9da', '#1b1f3b', '#c9a2d9'];

export const clp = (n: number) => '$' + n.toLocaleString('es-CL');
