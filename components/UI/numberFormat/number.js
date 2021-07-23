export const numberFormat = (num) => Number(
    parseFloat(num).toFixed(2)
  ).toLocaleString("en", { minimumFractionDigits: 2 })