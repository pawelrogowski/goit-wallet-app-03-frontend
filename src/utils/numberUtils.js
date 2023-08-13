export const fixDigitsToTwoDecimalPlaces = number => {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }

  return parseFloat(number.toFixed(2));
};

export const formatNumberWithSpaces = number => {
  if (typeof number !== 'number') {
    throw new Error('Input must be a number');
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const formatCompactNumber = number => {
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;

  if (Math.abs(number) >= billion) {
    return `${(number / billion).toFixed(2)}B`;
  } else if (Math.abs(number) >= million) {
    return `${(number / million).toFixed(2)}M`;
  } else if (Math.abs(number) >= thousand) {
    return `${(number / thousand).toFixed(2)}K`;
  } else {
    return number.toFixed(2);
  }
};

export const formatBalance = num => {
  if (Math.abs(num) > 9999) {
    return formatCompactNumber(num);
  }

  const fixed = num.toFixed(2);

  if (fixed.indexOf('.00') === -1) {
    return fixed + '.00';
  } else {
    return fixed;
  }
};
