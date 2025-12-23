// src/utils/format-currency.ts
// NOTE: function names retained for minimal changes across the codebase.
// Now these functions work in INR (rupees) using paise as the stored integer unit.

// Convert rupees to paise when saving (previously "dollars -> cents")
export function convertToCents(amount: number) {
  // amount is expected in rupees (e.g. 123.45 INR)
  // we store integer paise (1 INR = 100 paise)
  if (amount == null || Number.isNaN(amount)) return 0;
  return Math.round(amount * 100);
}

// Convert paise to rupees when retrieving (previously "cents -> dollars")
export function convertToDollarUnit(amount: number) {
  // amount is stored in paise (integer). Return rupees (float).
  if (amount == null || Number.isNaN(amount)) return 0;
  return amount / 100;
}

export function formatCurrency(amount: number) {
  // amount passed in rupees (not paise). If you pass paise, convert first.
  // Example usage:
  //   formatCurrency(convertToDollarUnit(storedPaise))
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
}
