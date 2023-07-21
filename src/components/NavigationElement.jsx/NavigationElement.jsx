import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
p {display: none};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    color: var(--font-color-dark);
    text-decoration: none;
    margin-left: 20px;
    margin-top: 0px;
    gap:0px;
 &:last-child {
      display: none;
    }
    p {display: flex;
    margin-left:20px;
    };
 &:hover,
 &:active {
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
 }
 &.active>p{
font-size: 18px;
font-weight: 700; 
 }
`;

const StyledIcon = styled(Icon)`
  border-radius: 4px;
  fill: #6e78e8;
  width: 44px;
  height: 44px;
  transition: box-shadow 150ms;
  &:hover,
  &:focus {
    fill: var(--color-brand-primary);
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    fill: #6e78e8;
    width: 24px;
    height: 24px;
    transition: box-shadow 150ms;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
const NavigationElement = () => {
  return (
    <>
      <StyledNavLink to={`/`}>
        <StyledIcon icon="icon__baseline-home" />
        <p>Home</p>
      </StyledNavLink>
      <StyledNavLink to={`/statistic`}>
        <StyledIcon icon="icon__baseline-timeline" />
        <p>Statistics</p>
      </StyledNavLink>
      <StyledNavLink to={`/currency`}>
        <StyledIcon icon="icon__baseline-dolar" />
      </StyledNavLink>
    </>
  );
};

export default NavigationElement;
