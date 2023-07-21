import React from 'react';
import NavigationElement from 'components/NavigationElement.jsx/NavigationElement';
import styled from 'styled-components';

const StyledDiv = styled.nav`
  margin: 0;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`;

const Navigation = () => {
  return (
    <>
      <StyledDiv>
        <NavigationElement />
      </StyledDiv>
    </>
  );
};

export default Navigation;
