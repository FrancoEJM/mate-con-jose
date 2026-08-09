export interface Valor {
  etiqueta: string;
  monto: string;
  detalle: string;
  destacado?: boolean;
}

export interface Eje {
  eje: string;
  semanas: number;
}

export interface Programa {
  id: string;
  title: string;
  weeks: string;
  /** Texto largo dentro del modal. */
  desc: string;
  /** Texto corto de la tarjeta. */
  resumen: string;
  bullets: string[];
  destacado?: boolean;
  pdf?: string;
  pdfName?: string;
  /** Solo Ruta PAES: detalle de contenidos, planificación y valores. */
  incluye?: string[];
  plan?: Eje[];
  valores?: Valor[];
}

export const programas: Programa[] = [
  {
    id: 'intensivo',
    title: 'Intensivo PAES',
    weeks: '12 semanas',
    desc: 'Preparación acelerada para quienes parten con menos tiempo, enfocada en los contenidos de mayor impacto.',
    resumen: 'Ritmo acelerado para quienes parten con menos tiempo.',
    bullets: [
      'Contenidos priorizados por impacto',
      'Ensayos cronometrados',
      'Técnicas de resolución rápida',
      'Cobertura M1 y M2',
    ],
  },
  {
    id: 'rutapaes',
    title: 'Ruta PAES · M1',
    weeks: '18 semanas',
    desc: 'Preparación completa y progresiva para la PAES Competencia Matemática M1, combinando teoría, práctica y estrategias de resolución.',
    resumen: 'Preparación completa y progresiva de principio a fin.',
    destacado: true,
    pdf: '/assets/Programa-Ruta-M1.pdf',
    pdfName: 'Programa-Ruta-M1.pdf',
    bullets: [
      'Cobertura total del temario PAES',
      'Plan de estudio semana a semana',
      'Ensayos y seguimiento de avance',
      'Soporte por WhatsApp',
    ],
    incluye: [
      'Clase de diagnóstico personalizada',
      '18 clases en vivo (1 semanal de 1h 15min)',
      '18 resúmenes teóricos, uno por semana',
      '18 guías de ejercicios tipo PAES',
      'Formularios con fórmulas y conceptos clave',
      'Videos de resolución paso a paso',
      '2 ensayos tipo PAES (semana 1 y 18)',
      'Estrategias para enfrentar la PAES',
      'Seguimiento de dudas por WhatsApp',
      'Planificación semanal organizada',
    ],
    plan: [
      { eje: 'Números', semanas: 4 },
      { eje: 'Álgebra', semanas: 4 },
      { eje: 'Funciones', semanas: 3 },
      { eje: 'Geometría', semanas: 5 },
      { eje: 'Probabilidad y estadística', semanas: 2 },
    ],
    valores: [
      {
        etiqueta: 'Pago mensual',
        monto: '5 × $35.990',
        detalle: 'Total $179.950 · el 1° de cada mes',
      },
      {
        etiqueta: '3 cuotas',
        monto: '3 × $55.990',
        detalle: 'Total $167.970 · semanas 1, 5 y 10',
      },
      {
        etiqueta: 'Pago único',
        monto: '$159.990',
        detalle: 'El más conveniente',
        destacado: true,
      },
    ],
  },
  {
    id: 'stem',
    title: 'Ruta STEM',
    weeks: 'M1 y M2',
    desc: 'Para carreras STEM (Ciencia, Tecnología, Ingeniería y Matemática): profundidad en Matemática M1 y M2.',
    resumen: 'Para carreras STEM: Ciencia, Tecnología, Ingeniería y Matemática.',
    bullets: [
      'Enfoque en Matemática M1 y M2',
      'Profundidad para ingenierías y ciencias',
      'Pensamiento matemático aplicado',
      'Puente hacia la universidad',
    ],
  },
];

/** Colores de las barras del plan semanal, en orden. */
export const coloresPlan = ['#8b7cc8', '#5b4b8a', '#b5a9da', '#1b1f3b', '#c9a2d9'];

/** Clase particular suelta. */
export const clase = {
  precio: 12000,
  incluye: [
    'Clase 100% personalizada',
    'Resolución de ejercicios y dudas',
    'Fortalecimiento de puntos débiles',
    'Online o presencial',
  ],
};

/** Pack de nivelación: el usuario elige cuántas clases. */
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

export const clp = (n: number) => '$' + n.toLocaleString('es-CL');
