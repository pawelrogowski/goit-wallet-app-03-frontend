import Chart from 'components/Chart/Chart';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { ChartContainer, Title } from './StatisticsPage.styled';

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
