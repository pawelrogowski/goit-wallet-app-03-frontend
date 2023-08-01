import styled from 'styled-components';

export const StrengthBar = styled.progress`
  @media screen and (min-height: 767px) {
    width: 100%;
  }
  width: 410px;
  border-radius: 20px;
  min-height: 4px;
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 280px;
  }
`;
