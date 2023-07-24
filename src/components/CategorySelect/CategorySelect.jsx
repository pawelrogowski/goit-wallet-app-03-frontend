import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import styled from 'styled-components';

const customStyles = {
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
    border: 'none',
    borderBottom: '1px solid var(--color-switch-main)',
    borderRadius: '0',
    boxShadow: 'none',
    alignItems: 'flex-end',
    '&:hover': { borderBottom: '1px solid var(--color-switch-main)' },

    '@media only screen and (max-width: 767px)': {
      paddingLeft: '20px',
    },
  }),
  option: (provided, { isFocused }) => ({
    ...provided,
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
  }),

  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    alignItems: 'flex-end',
    padding: '1px 1px',
  }),
  placeholder: provided => ({
    ...provided,
    color: 'var(--color-logout-button)',
  }),
};

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <CategoryWrapper>
      <Select styles={customStyles} {...field} {...props} />
    </CategoryWrapper>
  );
};

export default CategorySelect;
