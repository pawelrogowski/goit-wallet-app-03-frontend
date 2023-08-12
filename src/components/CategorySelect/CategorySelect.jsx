import React from 'react';
import Select from 'react-select';
import { useField } from 'formik';
import { customStyles, CategoryWrapper } from './CategorySelect.styled';
import DropdownIndicator from './DropdownIndicator';
import PropTypes from 'prop-types';

const CategorySelect = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <CategoryWrapper>
      <Select styles={customStyles} components={{ DropdownIndicator }} {...field} {...props} />
    </CategoryWrapper>
  );
};

export default CategorySelect;

CategorySelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
  styles: PropTypes.object,
  components: PropTypes.object,
};
