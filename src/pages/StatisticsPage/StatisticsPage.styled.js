import styled from 'styled-components';
import { Heading } from 'components/Heading/Heading';

export const Title = styled(Heading)`
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 100%;
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  + div {
    margin-top: 0px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 20px;
    }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-top: 0px;
    }
  }
`;
