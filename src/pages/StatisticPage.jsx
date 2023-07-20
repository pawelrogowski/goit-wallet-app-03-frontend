import Balance from 'components/Balance/Balance';
import Chart from 'components/Chart/Chart';
import { Container } from 'components/Container/Container';
import Currency from 'components/Currency/Currency';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import Header from 'components/Header/Header';
import { Heading } from 'components/Heading/Heading';
import Navigation from 'components/Navigation/Navigation';
import styled from 'styled-components';

const Section = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
const AsideContainer = styled.div`
  flex-grow: 2;
`;
const MainContainer = styled.div`
  margin-left: 70px;
  padding-left: 70px;
  border-left: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  display: flex;
  flex-grow: 1;

  & > :first-child {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
const Title = styled(Heading)`
  display: flex;
  flex-direction: column;
`;

const StatisticPage = () => {
  return (
    <>
      <Header />
      <Section as="section">
        <AsideContainer as="aside">
          <Navigation />
          <Balance />
          <Currency />
        </AsideContainer>

        <MainContainer as="main">
          <Title as="h1">Statistic</Title>
          <Chart />
          <DiagramTable />
        </MainContainer>
      </Section>
    </>
  );
};

export default StatisticPage;
