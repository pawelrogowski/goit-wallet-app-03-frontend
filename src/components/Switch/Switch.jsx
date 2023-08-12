import { Icon } from 'components/Icon/Icon';
import { useField } from 'formik';
import { StyledSwitch, SwitchCheckbox, SwitchSlider, SwitchText } from './Switch.styled';
import PropTypes from 'prop-types';

const Switch = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <StyledSwitch>
      <SwitchText $isChecked={props.checked}>Income</SwitchText>
      <SwitchSlider $isChecked={props.checked}>
        <SwitchCheckbox {...field} {...props} />
        <Icon icon="icon__btn-plus" $isChecked={props.checked} />
        <Icon icon="icon__btn-minus" $isChecked={props.checked} />
      </SwitchSlider>
      <SwitchText $isChecked={props.checked}>Expense</SwitchText>
    </StyledSwitch>
  );
};

export default Switch;

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,

  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};
