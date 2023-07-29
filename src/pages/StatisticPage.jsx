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

const StatisticPage = () => {
  return (
    <>
      <Title as="h1">Statistics</Title>
      <Chart />
      <DiagramTable />
    </>
  );
};

export default StatisticPage;
