import React from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Logo from 'components/Logo/Logo';

const HeaderDiv = styled.header`
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: ${props => props.theme.background.light};
  padding: 15px 20px 15px 20px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 80px;
  }
`;

const LogoutDiv = styled.div`
  display: flex;
  gap: 8px;
  height: 30px;
  align-items: center;
  color: ${props => props.theme.colors.logoutButton};
  fill: ${props => props.theme.colors.logoutButton};
  font-size: 18px;
  font-weight: 400;

  svg {
    width: 18px;
    height: 18px;
  }

  .exitText {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .nameText {
    margin-right: 4px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
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
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Logo></Logo>
      <LogoutDiv>
        <span className="nameText">Name</span>
        <div className="divider"></div>
        <Icon icon="icon__exit"></Icon>
        <span className="exitText">Exit</span>
      </LogoutDiv>
    </HeaderDiv>
  );
};

export default Header;
