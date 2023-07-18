import { Icon } from 'components/Icon/Icon';
import styled from 'styled-components';

const StyledAuthNav = styled.nav`
  display: block;
  height: 27px;
  padding-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;

  composes: nav;
  font-family: PoppinsBold;
  filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
`;

const NavigationElement = () => {
  return (
    <>
      <StyledAuthNav>
        <Icon icon="icon__baseline-home" width="24" height="24"></Icon>
      </StyledAuthNav>
      <StyledAuthNav>
        <Icon icon="icon__baseline-timeline" width="24" height="24"></Icon>
      </StyledAuthNav>
    </>
  );
};

export default NavigationElement;
