import React from 'react';

import { Icon } from 'components/Icon/Icon';
import { LogoContainer, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <LogoContainer>
      <Icon icon="icon__logo" width="30" height="30"></Icon>
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};

export default Logo;
