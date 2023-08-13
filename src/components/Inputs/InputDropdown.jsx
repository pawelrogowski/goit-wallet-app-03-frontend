import { Icon } from 'components/Icon/Icon';
import { StyledSelect } from './InputDropdown.styled';

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

export default InputDropdown;
