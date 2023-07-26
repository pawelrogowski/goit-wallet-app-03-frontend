import styled from 'styled-components';

export const Container = styled.div`
  // only desktop styles
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 1400px;
  }
`;
