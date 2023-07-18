import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';

const StyledDiv = styled.div`
  display: flex;
  height: 27px;
  margin-bottom: 12px;
  padding-top:15px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    border-radius: 2px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
}
    svg {
    &:hover,
    &:focus {
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }}
  }
`;

const NavLink = styled.a`
  list-style: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;
  color: var(--font-color-dark);
  text-decoration: none;
  margin-left: 20px;
  &:hover,
  &:focus {
    text-decoration: none;
    font-weight: 700;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const NavigationElement = () => {
  return (
    <>
      <StyledDiv>
        <Icon icon="icon__baseline-home" width="24" height="24"></Icon>
        <NavLink href="#">Home</NavLink>
      </StyledDiv>

      <StyledDiv>
        <Icon icon="icon__baseline-timeline" width="24" height="24"></Icon>
        <NavLink href="#">Statistics</NavLink>
      </StyledDiv>
    </>
  );
};

export default NavigationElement;
