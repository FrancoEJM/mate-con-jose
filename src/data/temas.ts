/** Los filtros de la sección Videos. El campo "tema" de videos.yaml debe ser uno de estos. */
export const temasPorCategoria = {
  PAES: ['Números', 'Álgebra', 'Funciones', 'Geometría', 'Probabilidad y estadística'],
  Universidad: ['Álgebra', 'Cálculo', 'Geometría', 'Trigonometría'],
} as const;

export type Categoria = keyof typeof temasPorCategoria;
