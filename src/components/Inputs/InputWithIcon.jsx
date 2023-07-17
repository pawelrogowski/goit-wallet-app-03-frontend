import styled from 'styled-components';
import { BaseInput } from './BaseInput';
import icons from '../../assets/icons/icons.svg';

const StyledDiv = styled.div`
  display: inline-block;
  position: relative;
  svg {
    pointer-events: none;
  }
`;

export const InputWithIcon = ({ icon, placeholder }) => {
  return (
    <StyledDiv>
      <BaseInput hasicon="true" placeholder={placeholder} />

      <svg>
        <use href={icons + `#${icon}`} />
      </svg>
    </StyledDiv>
  );
};
