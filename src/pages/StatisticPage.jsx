import styled from 'styled-components';
import Chart from 'components/Chart/Chart';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { Heading } from 'components/Heading/Heading';

const Title = styled(Heading)`
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 100%; // this 100% width is so the heading takes full width of a parent, pushing other elements below
`;
const ChartContainer = styled.div`
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
const StatisticPage = () => {
  return (
    <>
      <ChartContainer>
        <Title as="h1">Statistics</Title>
        <Chart />
      </ChartContainer>
      <DiagramTable />
    </>
  );
};

export default StatisticPage;
