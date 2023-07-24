import styled from 'styled-components';
import { BaseInput } from './BaseInput';
import { Icon } from '../Icon/Icon';
import { useField } from 'formik';

const StyledDiv = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 30px;

  ${BaseInput} {
    padding-left: 47px;
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  font-size: 13px;
  color: var(--color-brand-accent);
  margin-bottom: 10px;
`;

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
