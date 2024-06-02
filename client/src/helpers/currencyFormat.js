export const currencyFormat = (num, symbol = "$", decimals = 0) => {
  return symbol + new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
};