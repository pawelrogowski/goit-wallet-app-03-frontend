import styled from 'styled-components';

export const BaseInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-switch-main);
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  color: var(--font-color-dark);
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;

  &::placeholder {
    color: var(--color-logout-button);
  }

  &:focus {
    outline: none;
  }

  &:focus {
    outline: none;

    + svg {
      fill: var(--color-brand-primary);
      transition: fill 150ms;
    }
  }

  + svg {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 10px;
    top: -1px;
    fill: var(--color-switch-main);
    transition: fill 150ms;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 409.5px;
  }
`;
