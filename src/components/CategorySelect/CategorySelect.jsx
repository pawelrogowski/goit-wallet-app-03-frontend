import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { customStyles, CategoryWrapper } from './CategorySelect.styled';
import DropdownIndicator from './DropdownIndicator';

const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <CategoryWrapper>
      <Select styles={customStyles} components={{ DropdownIndicator }} {...field} {...props} />
    </CategoryWrapper>
  );
};

export default CategorySelect;
