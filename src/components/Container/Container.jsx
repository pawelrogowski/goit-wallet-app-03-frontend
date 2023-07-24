import styled from 'styled-components';

export const Container = styled.div`
  // mobile styles + everything that does not change with width
  margin: 0 auto;

  // tablet styles + everything that tablet and desktop have in common
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 117px 0 116px;
  }

  // only desktop styles
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 90vw;
    padding: 0 91px 0 76px;
  }
`;

export const ContainerWallet = styled(Container)``;
