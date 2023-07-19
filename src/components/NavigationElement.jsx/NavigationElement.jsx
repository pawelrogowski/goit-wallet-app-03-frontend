import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';

const StyledDiv = styled.div`
  cursor: pointer;
  display: flex;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    fill: #6e78e8;
    border-radius: 2px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 44px;
    height: 44px;
    &:hover,
    &:focus,
    &:active {
      fill: var(--color-brand-primary);
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

const NavLink = styled.a`
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
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
  }
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
const NavigationElement = () => {
  return (
    <StyledBox>
      <StyledDiv>
        <Icon icon="icon__baseline-home"></Icon>
        <NavLink href="#">Home</NavLink>
      </StyledDiv>
      <StyledDiv>
        <Icon icon="icon__baseline-timeline"></Icon>
        <NavLink href="#">Statistics</NavLink>
      </StyledDiv>
      <StyledDiv>
        <Icon icon="icon__baseline-dolar"></Icon>
      </StyledDiv>
    </StyledBox>
  );
};

export default NavigationElement;
