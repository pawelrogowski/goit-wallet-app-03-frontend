import Logo from 'components/Logo/Logo';
import { StyledNavLink } from './LogoButton.styled';
export const LogoButton = () => {
  return (
    <StyledNavLink to="/home">
      <Logo />
    </StyledNavLink>
  );
};
