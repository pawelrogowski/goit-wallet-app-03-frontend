import { components } from 'react-select';
import { Icon } from 'components/Icon/Icon';

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="icon__arrow-down" width="18px" height="9px" />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;
