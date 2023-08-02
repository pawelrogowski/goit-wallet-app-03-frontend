import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 1400px;
  }
`;
