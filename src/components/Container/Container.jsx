import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: ${props => props.theme.breakpoints.tablet};
  border: 1px solid black;
  display: flex;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: ${props => props.theme.breakpoints.desktop};
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 90%;
  }
`;
