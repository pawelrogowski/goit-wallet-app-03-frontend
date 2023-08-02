import styled from 'styled-components';

export const customStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
    maxWidth: '409px',
    border: 'none',
    fontFamily: 'Circe',
    fontSize: '18px',
  }),
  control: provided => ({
    ...provided,
    minHeight: '20px',
    border: 'none',
    borderBottom: '1px solid var(--color-switch-main)',
    borderRadius: '0',
    boxShadow: 'none',
    alignItems: 'flex-end',
    cursor: 'pointer',
    '&:hover': { borderBottom: '1px solid var(--color-switch-main)' },

    '@media only screen and (max-width: 767px)': {
      paddingLeft: '20px',
    },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: isFocused && 'var(--background-light)',
    color: isFocused ? 'var(--color-brand-accent)' : 'black',
    '&:hover': {
      backgroundColor: isFocused && 'var(--background-light)',
      color: isFocused ? 'var(--color-brand-accent)' : 'black',
    },
    padding: '10px 20px',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '20px',
    backgroundColor: 'var(--background-category-select)',
    boxShadow: '0px 6px 15px 0px var(--shadow-cayegory-select)',
    backdropFilter: 'blur(9px)',
    overflow: 'hidden',
    marginTop: '1px',
  }),
  menuList: provided => ({
    ...provided,

    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      background: 'var(--color-logout-button)',
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: 'var(--color-logout-button)',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  indicatorContainer: provided => ({
    ...provided,
    padding: '0px',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: '0px 5px 0px 0px',
  }),
  valueContainer: provided => ({
    ...provided,
    alignItems: 'flex-end',
    padding: '1px 1px',
  }),
  input: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '0px',

    '@media only screen and (max-width: 767px)': {
      paddingLeft: '0px',
    },
  }),
  singleValue: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    '@media only screen and (max-width: 767px)': {
      paddingLeft: '0px',
      margin: '0px',
    },
  }),
  placeholder: provided => ({
    ...provided,
    paddingLeft: '8px',
    paddingBottom: '2px',
    color: 'var(--color-logout-button)',
    '@media only screen and (max-width: 767px)': {
      paddingLeft: '0px',
    },
  }),
};

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
