import styled from 'styled-components';

export const BaseInput = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-dark);
  margin-bottom: 40px;
  max-width: 100%;
  width: 280px;

  &::placeholder {
    color: #bdbdbd;
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
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
    fill: #e0e0e0;
    transition: fill 150ms;
  }

  //this adds a prop check, if its passade as hasicon = true it applies the styles
  ${({ hasicon }) =>
    hasicon &&
    `
    padding-left: 47px;
  `}

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 409.5px;
  }
`;
