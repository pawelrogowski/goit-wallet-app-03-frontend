import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTransactions,
  addTransaction,
  removeTransaction,
  editTransaction,
  fetchFilteredTransactions,
  fetchTotals,
  fetchMonthlyTotals,
} from 'redux/slices/transactionSlice';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export function TransactionsComponent() {
  const dispatch = useDispatch();

  const { transactions, isLoading, error } = useSelector(state => state.transactions);

  const [transactionIdToRemove, setTransactionIdToRemove] = useState('');
  const [idToEdit, setIdToEdit] = useState('');
  const [editedTransaction, setEditedTransaction] = useState({
    amount: 0,
    category: '',
    date: '',
    isIncome: true,
    comment: '',
  });

  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [totals, setTotals] = useState({});

  const handleFetchTransactions = () => {
    dispatch(fetchTransactions());
  };

  const handleAddTransaction = transaction => {
    dispatch(addTransaction(transaction));
  };

  const handleRemoveTransaction = () => {
    dispatch(removeTransaction(transactionIdToRemove));
    setTransactionIdToRemove('');
  };

  const handleEditTransaction = () => {
    const transactionData = {
      amount: editedTransaction.amount,
      category: editedTransaction.category,
      date: editedTransaction.date,
      isIncome: editedTransaction.isIncome,
      comment: editedTransaction.comment,
    };

    dispatch(editTransaction({ id: idToEdit, updatedData: transactionData }));

    setEditedTransaction({
      amount: 0,
      category: '',
      date: '',
      isIncome: true,
      comment: '',
    });
  };

  const handleFetchFilteredTransactions = (month, year) => {
    const filterData = {
      month: month,
      year: year,
    };

    dispatch(fetchFilteredTransactions(filterData)).then(action => {
      setFilteredTransactions(action.payload);
    });
  };

  const handleFetchTotals = () => {
    dispatch(fetchTotals()).then(action => {
      setTotals(action.payload);
    });
  };

  const handleFetchMonthlyTotals = (month, year) => {
    dispatch(fetchMonthlyTotals(month, year));
  };

  return (
    <StyledDiv>
      <button onClick={handleFetchTransactions}>Fetch Transactions</button>

      {isLoading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}

      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.amount} &nbsp;&nbsp;&nbsp;&nbsp; {t.category} &nbsp;&nbsp;&nbsp;&nbsp; {t.date}{' '}
            &nbsp;&nbsp;&nbsp;&nbsp; {JSON.stringify(t.isIncome)} &nbsp;&nbsp;&nbsp;&nbsp;{' '}
            {t.comment} &nbsp;&nbsp;&nbsp;&nbsp; id: {t._id}
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          handleAddTransaction({
            amount: 100,
            category: 'Income',
            date: '22.08.1992',
            isIncome: true,
            comment: 'This is a transaction added from TestTransactions.jsx',
          })
        }
      >
        Add Transaction
      </button>

      <input
        type="text"
        value={transactionIdToRemove}
        onChange={e => setTransactionIdToRemove(e.target.value)}
        placeholder="Enter transaction ID to remove"
      />
      <button onClick={handleRemoveTransaction}>Remove Transaction</button>

      <div>
        <input
          value={idToEdit}
          onChange={e => setIdToEdit(e.target.value)}
          placeholder="id to edit"
        />
        <input
          type="number"
          value={editedTransaction.amount}
          onChange={e =>
            setEditedTransaction({ ...editedTransaction, amount: parseFloat(e.target.value) })
          }
          placeholder="Amount"
        />
        <input
          type="text"
          value={editedTransaction.category}
          onChange={e => setEditedTransaction({ ...editedTransaction, category: e.target.value })}
          placeholder="Category"
        />
        <input
          type="text"
          value={editedTransaction.date}
          onChange={e => setEditedTransaction({ ...editedTransaction, date: e.target.value })}
          placeholder="Date"
        />
        <label>
          <input
            type="checkbox"
            checked={editedTransaction.isIncome}
            onChange={e =>
              setEditedTransaction({ ...editedTransaction, isIncome: e.target.checked })
            }
          />
          Is Income
        </label>
        <input
          type="text"
          value={editedTransaction.comment}
          onChange={e => setEditedTransaction({ ...editedTransaction, comment: e.target.value })}
          placeholder="Comment"
        />
        <button onClick={handleEditTransaction}>Edit Transaction</button>
      </div>

      {filteredTransactions && filteredTransactions.length > 0 && (
        <div>
          <h2>Filtered Transactions</h2>
          <ul>
            {filteredTransactions.map(t => (
              <li key={t.id}>
                {t.amount} &nbsp;&nbsp;&nbsp;&nbsp; {t.category} &nbsp;&nbsp;&nbsp;&nbsp; {t.date}{' '}
                &nbsp;&nbsp;&nbsp;&nbsp; {JSON.stringify(t.isIncome)} &nbsp;&nbsp;&nbsp;&nbsp;{' '}
                {t.comment} &nbsp;&nbsp;&nbsp;&nbsp; id: {t._id}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display the totals */}
      {Object.keys(totals).length > 0 && (
        <div>
          <h2>Totals, check redux or network tab for separate objects for each category</h2>
          <p>Total Income: {totals.totalIncome}</p>
          <p>Total Expenses: {totals.totalExpenses}</p>
          <p>Difference: {totals.difference}</p>
        </div>
      )}

      {/* Button to test fetching filtered transactions */}
      <button onClick={() => handleFetchFilteredTransactions(7, 2023)}>
        Fetch Filtered Transactions 07.2022
      </button>

      {/* Button to test fetching total amounts */}
      <button onClick={handleFetchTotals}>Fetch Totals</button>

      {/* Button to test fetching monthly totals */}
      <button onClick={() => handleFetchMonthlyTotals({ month: 7, year: 2023 })}>
        Fetch Monthly Totals 07.2023
      </button>
    </StyledDiv>
  );
}
