import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from './redux/slices/transactionSlice';

const TestComponent2 = () => {
  const dispatch = useDispatch();
  const totals = useSelector(state => state.transactions.totals);
  const isLoading = useSelector(state => state.transactions.isLoading);
  const error = useSelector(state => state.transactions.error);

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalsArray = Object.entries(totals);

  return (
    <div>
      <h2>Transaction Totals</h2>
      <ul>
        {totalsArray.map(([category]) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent2;
