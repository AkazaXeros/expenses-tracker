const formatter = Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  currency: 'USD',
});

export const formatCurrency = (value) => formatter.format(value);
