import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { customStyles, CategoryWrapper } from './CategorySelect.styled';
const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <CategoryWrapper>
      <Select styles={customStyles} {...field} {...props} />
    </CategoryWrapper>
  );
};

export default CategorySelect;
