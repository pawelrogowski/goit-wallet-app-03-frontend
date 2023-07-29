export const fixDigitsToTwoDecimalPlaces = number => {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }

  return parseFloat(number.toFixed(2));
};
