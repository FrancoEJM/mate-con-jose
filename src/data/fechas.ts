/**
 * Las fechas se guardan en ISO (2026-07-08) porque el JSON-LD las necesita así,
 * y se muestran en español. Un solo dato, sin posibilidad de desincronizarse.
 */

/** 2026-07-08 → "8 jul 2026" */
export function formatearFecha(fecha: Date): string {
  return fecha
    .toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    })
    .replace(/\./g, '');
}

/** 2026-07-08 → "2026-07-08", el formato que espera schema.org */
export function fechaISO(fecha: Date): string {
  return fecha.toISOString().slice(0, 10);
}
