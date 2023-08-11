import styled from 'styled-components';
import { Container } from 'components/Container/Container.styled';

export const HeaderDiv = styled.header`
  position: relative;
  height: 60px;
  display: flex;
  background-color: ${props => props.theme.background.light};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 80px;
  }
`;
export const ContainerHeader = styled(Container)`
  display: flex;
  width: 100%;
  padding: 15px 20px 15px 20px;
  max-width: 1400px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoutDiv = styled.div`
  display: flex;
  gap: 4px;
  height: 30px;
  align-items: center;
  fill: ${props => props.theme.colors.logoutButton};
  font-size: 18px;
  font-weight: 400;

  svg {
    width: 18px;
    height: 18px;
    transition: fill 150ms;
  }

  .exitText {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .nameText {
    margin-right: -4px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-right: 0px;
    }
  }

  .exitButton {
    display: flex;
    cursor: pointer;
    transition: color 150ms;

    span {
      margin-left: 6px;
    }

    &:hover,
    &:focus {
      transition: color 150ms;
      color: var(--color-brand-primary);
      svg {
        transition: fill 150ms;
        fill: var(--color-brand-primary);
      }
    }
  }

  .divider {
    height: 30px;
    margin-right: 4px;
    border: 1px solid ${props => props.theme.colors.logoutButton};
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .button {
    outline: none;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.logoutButton};
  }
`;
