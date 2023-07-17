import React from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';

const LogoContainer = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
    height: 40px;

    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const LogoText = styled.span`
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: 700;
  font-size: 23px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 30px;
    line-height: 45px;
    margin-right: 20px;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Icon icon="icon__logo" width="30" height="30"></Icon>
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};

export default Logo;
