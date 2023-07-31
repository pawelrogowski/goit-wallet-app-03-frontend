import { StyledNavLink } from './LogButton.Styled';
import Logo from 'components/Logo/Logo';
export const LogoButton = () => {
  return (
    <StyledNavLink to="/home">
      <Logo />
    </StyledNavLink>
  );
};
