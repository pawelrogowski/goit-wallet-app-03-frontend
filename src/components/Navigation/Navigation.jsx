import { Icon } from 'components/Icon/Icon';
import React from 'react';
import { NavContainer, NavItem, NavItemText, NavList, StyledNavLink } from './Navigation.styled';
import styled from 'styled-components';

const NavigationBase = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <StyledNavLink
            to={`/home`}
            className={({ isActive }) => (isActive ? 'activelink' : NavContainer)}
          >
            <Icon icon="icon__baseline-home" />
            <NavItemText>Home</NavItemText>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink
            to={`/diagram`}
            className={({ isActive }) => (isActive ? 'activelink' : NavContainer)}
          >
            <Icon icon="icon__baseline-timeline" />
            <NavItemText>Statistics</NavItemText>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink
            to={`/currency`}
            className={({ isActive }) => (isActive ? 'activelink' : NavContainer)}
          >
            <Icon icon="icon__baseline-dolar" />
          </StyledNavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

const Navigation = styled(NavigationBase)``;
export default Navigation;
