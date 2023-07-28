import styled from 'styled-components';
// import Chart from 'components/Chart/Chart';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { Heading } from 'components/Heading/Heading';
import { useEffect } from 'react';
import { fetchTotals, fetchTransactions } from 'redux/slices/transactionSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

const Title = styled(Heading)`
  display: inline-block;
  padding: 0;
  margin-bottom: 0;
  width: 100%; // this 100% width is so the heading takes full width of a parent, pushing other elements below
`;

const StatisticPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.transactions);
  useEffect(() => {
    dispatch(fetchTotals());
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return console.error(error);
  }
  return (
    <>
      <Title as="h1">Statistics</Title>
      {/* <Chart /> */}
      <DiagramTable />
    </>
  );
};

export default StatisticPage;
