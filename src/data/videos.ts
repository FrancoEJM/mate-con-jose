export type Categoria = 'PAES' | 'Universidad';

export interface Video {
  title: string;
  category: Categoria;
  topic: string;
  date: string;
  read: string;
  /** URL de TikTok / Instagram / YouTube. Vacío muestra la tarjeta de "próximamente". */
  url: string;
  /** Ruta al artículo escrito, o '#' si todavía no existe. */
  href: string;
}

export const temasPorCategoria: Record<Categoria, string[]> = {
  PAES: ['Números', 'Álgebra', 'Funciones', 'Geometría', 'Probabilidad y estadística'],
  Universidad: ['Álgebra', 'Cálculo', 'Geometría', 'Trigonometría'],
};

export const videos: Video[] = [
  {
    title: 'Ecuaciones cuadráticas: fórmula general paso a paso',
    category: 'PAES',
    topic: 'Álgebra',
    date: '8 jul 2026',
    read: '6 min de lectura',
    url: 'https://vt.tiktok.com/ZSXw8xWfn/',
    href: '/videos/ecuaciones-cuadraticas/',
  },
  {
    title: 'Funciones: dominio y recorrido sin enredos',
    category: 'PAES',
    topic: 'Funciones',
    date: '1 jul 2026',
    read: '8 min de lectura',
    url: 'https://www.instagram.com/reel/DbPZHdTtyHG/',
    href: '#',
  },
  {
    title: 'La ecuación de la recta que siempre piden',
    category: 'PAES',
    topic: 'Geometría',
    date: '24 jun 2026',
    read: '5 min de lectura',
    url: '',
    href: '#',
  },
  {
    title: 'Probabilidad: el error que cuesta puntos',
    category: 'PAES',
    topic: 'Probabilidad y estadística',
    date: '7 jun 2026',
    read: '7 min de lectura',
    url: '',
    href: '#',
  },
  {
    title: 'Porcentajes y proporciones sin calculadora',
    category: 'PAES',
    topic: 'Números',
    date: '20 jun 2026',
    read: '6 min de lectura',
    url: '',
    href: '#',
  },
  {
    title: 'Límites: una introducción intuitiva',
    category: 'Universidad',
    topic: 'Cálculo',
    date: '12 jun 2026',
    read: '10 min de lectura',
    url: '',
    href: '#',
  },
  {
    title: 'Matrices y determinantes desde cero',
    category: 'Universidad',
    topic: 'Álgebra',
    date: '3 jun 2026',
    read: '9 min de lectura',
    url: '',
    href: '#',
  },
  {
    title: 'Identidades trigonométricas esenciales',
    category: 'Universidad',
    topic: 'Trigonometría',
    date: '28 may 2026',
    read: '7 min de lectura',
    url: '',
    href: '#',
  },
  {
    title: 'Vectores en el plano',
    category: 'Universidad',
    topic: 'Geometría',
    date: '20 may 2026',
    read: '8 min de lectura',
    url: '',
    href: '#',
  },
];
