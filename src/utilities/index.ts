export function formatCurrency(currency: number):string {
  return new Intl.NumberFormat("en-BW", {
    style: "currency",
    currency: "BWP",
    minimumFractionDigits: 2,
  }).format(currency);
}