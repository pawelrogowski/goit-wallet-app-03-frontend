import styled from 'styled-components';

export const StrengthBar = styled.progress`
  width: 100%;
  border-radius: 20px;
  height: 4px;

  &::-webkit-progress-bar {
    background-color: var(--background-progress-bar);
    border-radius: 7px;
  }
  &::-webkit-progress-value {
    background-color: var(--color-brand-secondary);
    border-radius: 7px;
    box-shadow: 0px 1px 6px 0.1px var(--color-brand-secondary);
  }
  &::-moz-progress-bar {
    background-color: var(--background-progress-bar);
    border-radius: 7px;
  }

  &::-moz-progress-value {
    background-color: var(--color-brand-secondary);
    border-radius: 7px;
    box-shadow: 0px 1px 6px 0.1px var(--color-brand-secondary);
  }

  //tablet+desktop
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 280px;
  }
`;
