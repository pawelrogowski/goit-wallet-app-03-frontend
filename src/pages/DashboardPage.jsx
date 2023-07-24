// import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { useEffect, useState } from 'react';
import { Heading } from 'components/Heading/Heading';
import Transactions from 'components/Transactions/Transactions';
import TransactionsMobile from 'components/TransactionsMobile/TransactionsMobile';

import styled from 'styled-components';

const Title = styled(Heading)`
  display: none;
  padding: 0;
  margin-bottom: 0;
  width: 100%; // this 100% width is so the heading takes full width of a parent, pushing other elements below
`;

const DashboardPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);
  return (
    <>
      <Title as="h1">DashboardPage</Title>
      {windowWidth ? <Transactions /> : <TransactionsMobile />}
    </>
  );
};

export default DashboardPage;
