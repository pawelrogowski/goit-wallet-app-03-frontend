import moment from 'moment';

export const formatDate = inputString => {
  const date = moment(inputString, 'DD MM YYYY HH:mm:ss GMTZZ');
  const formattedDate = date.format('DD.MM.YYYY');
  return formattedDate;
};

export const dateTransformer = (_, originalValue) => {
  const parsedDate = moment(originalValue, 'DD.MM.YYYY');
  return parsedDate.isValid() ? parsedDate.toDate() : new Date('');
};

export const getCharacterValidationError = str => {
  return `Password must have at least 1 ${str} character.`;
};

export const formatStringWithSpaces = text => {
  return text.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const MakeDecimalPlaces = text => {
  return parseFloat(text).toFixed(2);
};

export const truncateString = (str, maxLength = 50) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  } else {
    return str;
  }
};

export const makeProperDate = date => {
  const parts = date.split('-');
  return new Date(parts[2], parts[1] - 1, parts[0]);
};
