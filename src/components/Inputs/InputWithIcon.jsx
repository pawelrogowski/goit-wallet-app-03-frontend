import styled from 'styled-components';
import { BaseInput } from './BaseInput.styled';
import { Icon } from '../Icon/Icon';
import { useField } from 'formik';
import { ErrorMessage, StyledDiv } from './InputWithIcon.styled';
import PropTypes from 'prop-types';

const InputWithIconBase = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledDiv>
      <BaseInput {...field} {...props} />
      <Icon icon={icon} />

      {meta.touched && meta.error ? (
        <ErrorMessage className="error">{meta.error}</ErrorMessage>
      ) : null}
    </StyledDiv>
  );
};

export const InputWithIcon = styled(InputWithIconBase)``;

InputWithIcon.propTypes = {
  icon: PropTypes.string.isRequired,

  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,

  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  error: PropTypes.string,
  touched: PropTypes.bool,
};
