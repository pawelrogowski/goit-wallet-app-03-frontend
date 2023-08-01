import styled from 'styled-components';
import { BaseInput } from './BaseInput.styled';

export const StyledDiv = styled.div`
  display: inline-block;
  position: relative;
  margin-top: 30px;

  ${BaseInput} {
    padding-left: 54.5px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  font-size: 13px;
  color: var(--color-brand-accent);
  margin-bottom: 10px;
`;
