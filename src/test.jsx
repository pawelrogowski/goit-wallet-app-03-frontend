import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchTotals } from './redux/slices/transactionSlice';

const TestComponent = () => {
  const dispatch = useDispatch();

  const { totals, isLoading, error } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch]);

  useEffect(() => {
    console.log('Totals data changed:', totals.totals);
  }, [totals]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!totals.totals || totals.totals.length === 0) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <h2>Transaction Totals</h2>

      <ul>
        {totals.totals.map(item => (
          <li key={item.category} style={{ color: item.color, fontWeight: 'bold' }}>
            {item.category}: {item.sum}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestComponent;
