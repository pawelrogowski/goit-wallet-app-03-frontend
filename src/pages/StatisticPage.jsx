import styled from 'styled-components';
import Chart from 'components/Chart/Chart';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { Heading } from 'components/Heading/Heading';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-wrap: wrap;

  & > :nth-child(1n + 1) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 70px;
    padding-left: 70px;
    border-left: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  }
`;
const Title = styled(Heading)`
  display: inline-block;
  padding: 0;
  margin-bottom: 0;
  width: 100%; // this 100% width is so the heading takes full width of a parent, pushing other elements below
`;

const StatisticPage = () => {
  return (
    <MainContainer as="main">
      <Title as="h1">Statistic</Title>
      <Chart />
      <DiagramTable />
    </MainContainer>
  );
};

export default StatisticPage;
