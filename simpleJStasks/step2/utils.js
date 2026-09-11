// Suma unui array de numere.
export function calculateSum(values) {
  return values.reduce((sum, value) => sum + value, 0);
}

// Media unui array de numere (0 dacă array-ul este gol).
export function calculateAverage(values) {
  if (values.length === 0) return 0;
  return calculateSum(values) / values.length;
}
