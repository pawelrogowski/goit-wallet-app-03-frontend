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
