import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Transactions from 'components/Transactions/Transactions';
import TransactionsMobile from 'components/TransactionsMobile/TransactionsMobile';
import { fetchTransactions } from 'redux/slices/financeSlice';
import { Title } from './Home.styled';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';

const DashboardPage = () => {
  const dispatch = useDispatch();
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
      {windowWidth ? <Transactions /> : <TransactionsMobile />}
      {!windowWidth && <ButtonAddTransaction />}
    </>
  );
};

export default DashboardPage;
