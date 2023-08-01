import styled from 'styled-components';
import Datetime from 'react-datetime';

export const StyledDatetime = styled(Datetime)`
  input {
    border: none;
    border-bottom: 1px solid var(--color-switch-main);
    font-family: Circe;
    font-size: 18px;
    font-weight: 400;
    color: var(--font-color-dark);
    padding-left: 20px;
    padding-bottom: 2px;
    cursor: pointer;

    &:focus-visible {
      outline: 0 !important;
    }
  }

  &.rdt {
    position: relative;
  }

  &.rdtPicker {
    position: absolute;
    min-width: 250px;
    padding: 4px;
  }

  .rdtPicker td.rdtToday:before {
    border-bottom: 7px solid var(--color-brand-primary);
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: var(--color-brand-primary);
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    input {
      padding-left: 20px;
    }
  }
`;
