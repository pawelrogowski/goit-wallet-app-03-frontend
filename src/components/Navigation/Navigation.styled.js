import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from 'components/Icon/Icon';
import { motion } from 'framer-motion';
export const NavContainer = styled(motion.nav)`
  margin: 0;
  padding: 0;
  min-width: 280px;
  display: flex;
  justify-content: center;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-block;
  }
  ${Icon} {
    fill: var(--nav-color-inactive);
    width: 44px;
    height: 44px;
    position: relative;
    /* border radius added so the box shadow works properly */
    transition: fill 150ms, box-shadow 150ms;
    border-radius: 5px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 23px;
      height: 23px;
      border-radius: 2px;
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 15px;
    & > :last-of-type {
      display: none;
    }
  }
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  outline: none;
  &:focus,
  &:hover {
    ${Icon} {
      fill: var(--nav-color-active);
      transition: fill 150ms, box-shadow 150ms;
      box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    }
  }
  &:focus {
    span {
      transition: color 150ms;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

export const NavItemText = styled.span`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline;
    color: var(--font-color-dark);
    transition: color 150ms;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    &:hover {
      color: var(--nav-color-active);
      transition: color 150ms;
    }
  }
`;
