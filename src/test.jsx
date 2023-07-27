import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from './redux/slices/transactionSlice'; // Update this import path

const TestComponent2 = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactions.transactions);
  const isLoading = useSelector(state => state.transactions.isLoading);
  const error = useSelector(state => state.transactions.error);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {transactions.map(transaction => (
        <div key={transaction._id}>
          {transaction.description}: {transaction.amount}
        </div>
      ))}
    </div>
  );
};

export default TestComponent2;
