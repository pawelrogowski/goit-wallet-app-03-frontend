import { Heading } from 'components/Heading/Heading';
import Transactions from 'components/Transactions/Transactions';
import styled from 'styled-components';

const Title = styled(Heading)`
  display: none;
  padding: 0;
  margin-bottom: 0;
  width: 100%; // this 100% width is so the heading takes full width of a parent, pushing other elements below
`;

const DashboardPage = () => {
  return (
    <>
      <Title as="h1">DashboardPage</Title>
      <Transactions />
    </>
  );
};

export default DashboardPage;
