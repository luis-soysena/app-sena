export const formatCurrency = (number, currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency,
    maximumFractionDigits: 0,
  }).format(number);

export const formatDateToTime = (date) => new Date(date).getTime();
