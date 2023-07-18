import styled from 'styled-components';
import { BaseInput } from './BaseInput';
import { Icon } from '../Icon/Icon';

const StyledDiv = styled.div`
  display: inline-block;
  position: relative;

  ${Icon} {
    pointer-events: none;
    background-color: red;
  }
  ${BaseInput} {
    padding-left: 47px;
  }
  ${Icon.Icon}[icon="icon__baseline-email"] {
    fill: blue;
  }
`;

export const InputWithIcon = ({ icon, placeholder }) => {
  return (
    <StyledDiv>
      <BaseInput placeholder={placeholder} />

      <Icon icon={icon} />
    </StyledDiv>
  );
};
