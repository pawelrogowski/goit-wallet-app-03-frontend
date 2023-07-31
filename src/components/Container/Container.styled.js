import styled from 'styled-components';

export const Container = styled.div`
  // only desktop styles
  margin: 0 auto;
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 1400px;
  }
`;
