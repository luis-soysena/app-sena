export const formatCurrency = (number, currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency,
    maximumFractionDigits: 0,
  }).format(number);

export const formatDateToTime = (date) => new Date(date).getTime();

export const formatInputDate = (d) => {
  const date = new Date(d);
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });

  return [year, month, day].join("-");
};
