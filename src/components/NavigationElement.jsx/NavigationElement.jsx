import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';

// KOMPONENT DO REFACTORU, WRZUCONY ŻEBY MOŻNA GO BYŁO UŻYĆ W LAYOUCIE
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
    margin-top: 0px;
  }
`;

const StyledDiv = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: box-shadow 150ms, transform 150ms; /* Add box-shadow to the transition */

  svg {
    border-radius: 4px;
    fill: #6e78e8;
    width: 44px;
    height: 44px;
    transition: box-shadow 150ms; /* Modify the transition property for svg */
  }

  &:hover,
  &:focus {
    svg {
      fill: var(--color-brand-primary);
      box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5); /* Apply the box-shadow directly */
    }

    ${NavLink} {
      /* Remove the transform property to eliminate text scaling */
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    &:last-child {
      display: none;
    }
  }
`;

const StyledBox = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
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
        <Icon icon="icon__baseline-home" />
        <NavLink href="#">Home</NavLink>
      </StyledDiv>
      <StyledDiv>
        <Icon icon="icon__baseline-timeline" />
        <NavLink href="#">Statistics</NavLink>
      </StyledDiv>
      <StyledDiv>
        <Icon icon="icon__baseline-dolar" />
      </StyledDiv>
    </StyledBox>
  );
};

export default NavigationElement;
