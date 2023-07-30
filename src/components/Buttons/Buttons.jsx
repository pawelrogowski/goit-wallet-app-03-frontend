import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import React from 'react';
import { NavLink } from 'react-router-dom';
//Example Ussage:

/* <PrimaryButton type="button">LOG IN</PrimaryButton>
<SecondaryButton type="button">REGISTER</SecondaryButton> */

export const BaseButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 20px;
  border: none;
  letter-spacing: 1.8px;
  padding-left: 8px;

  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-light);
  line-height: 1;
  transition: background-color 150ms;

  &:hover {
    background-color: var(--color-brand-primary);
    transition: background-color 150ms;
    cursor: pointer;
  }
  &:focus {
    background-color: var(--color-brand-primary);
    transition: background-color 150ms;
    outline: none;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:disabled {
    background-color: var(--color-logout-button);
    cursor: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 300px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brand-secondary);
  border: none;
  color: var(--font-color-light);
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid var(--color-brand-primary);
  color: var(--color-brand-primary);

  &:hover,
  &:focus {
    color: var(--font-color-light);
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: var(--font-color-dark);
`;

export const LogoButton = () => {
  return (
    <StyledNavLink to="/home">
      <Logo />
    </StyledNavLink>
  );
};
