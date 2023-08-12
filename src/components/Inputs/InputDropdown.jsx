import { Icon } from 'components/Icon/Icon';
import { StyledSelect } from './InputDropdown.styled';
import PropTypes from 'prop-types';

const InputDropdown = ({ options, title, onChange }) => {
  return (
    <StyledSelect
      searchable={false}
      placeholder={title}
      options={options}
      values={[]}
      onChange={onChange}
      dropdownGap={-2}
      keepSelectedInList={true}
      dropdownHandleRenderer={({ state }) => (
        <span>
          {state.dropdown ? <Icon icon="icon__arrow-down" /> : <Icon icon="icon__arrow-up" />}
        </span>
      )}
    />
  );
};

InputDropdown.propTypes = {};

export default InputDropdown;

InputDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    })
  ).isRequired,

  title: PropTypes.string.isRequired,

  onChange: PropTypes.func.isRequired,

  searchable: PropTypes.bool,
  placeholder: PropTypes.string,
  values: PropTypes.array,
  dropdownGap: PropTypes.number,
  keepSelectedInList: PropTypes.bool,

  dropdownHandleRenderer: PropTypes.func,
};
