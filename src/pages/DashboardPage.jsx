// import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Heading } from 'components/Heading/Heading';
import Transactions from 'components/Transactions/Transactions';
import TransactionsMobile from 'components/TransactionsMobile/TransactionsMobile';
import { fetchTransactions } from 'redux/slices/transactionSlice';
import styled from 'styled-components';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import Loader from 'components/Loader/Loader';

const Title = styled(Heading)`
  display: none;
  padding: 0;
  margin-bottom: 0;
  width: 100%; // this 100% width is so the heading takes full width of a parent, pushing other elements below
`;

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.transactions);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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
      {isLoading && !error && <Loader />}
      {windowWidth ? <Transactions /> : <TransactionsMobile />}
      <ButtonAddTransaction />
    </>
  );
};

export default DashboardPage;
