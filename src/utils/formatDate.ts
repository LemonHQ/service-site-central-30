const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Deterministic "Month D, YYYY" formatter.
 *
 * Uses fixed UTC parts instead of toLocaleDateString so the server-rendered
 * (prerendered) markup always matches what the browser renders, avoiding
 * React hydration mismatches caused by locale/timezone differences.
 */
export function formatLongDate(input: string | number | Date): string {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return '';
  return `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}
