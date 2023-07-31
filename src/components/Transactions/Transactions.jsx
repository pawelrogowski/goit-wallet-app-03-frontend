import { Icon } from 'components/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate, makeProperDate } from 'utils/formaters';
import { removeTransaction, setTransactionToEdit } from 'redux/slices/transactionSlice';
import {
  EditButton,
  SmallButton,
  TransactionContainer,
  TransactionTableData,
  TransactionsBodyHeadRow,
  TransactionsTable,
  TransactionsTableBody,
  TransactionsTableHead,
  TransactionsTableHeadRow,
  TransactionsTableHeader,
} from './Transactions.styled';

const headers = ['Date', 'Type', 'Category', 'Comment', 'Sum', ''];

const Transactions = () => {
  const dispatch = useDispatch();

  const { transactions } = useSelector(state => state.transactions);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return makeProperDate(b.date) - makeProperDate(a.date);
  });

  const TransactionsDeleteHandler = id => {
    dispatch(removeTransaction(id));
  };

  return (
    <TransactionContainer>
      <TransactionsTable>
        <TransactionsTableHead>
          <TransactionsTableHeadRow>
            {headers.map((item, index) => (
              <TransactionsTableHeader key={index}>{item}</TransactionsTableHeader>
            ))}
          </TransactionsTableHeadRow>
        </TransactionsTableHead>
        <TransactionsTableBody>
          {sortedTransactions.map(transaction => (
            <TransactionsBodyHeadRow key={transaction._id}>
              <TransactionTableData>{formatDate(transaction.date)}</TransactionTableData>
              <TransactionTableData>{transaction.isIncome ? '+' : '-'}</TransactionTableData>
              <TransactionTableData>{transaction.category}</TransactionTableData>
              <TransactionTableData>{transaction.comment}</TransactionTableData>
              <TransactionTableData
                style={{
                  color: `${
                    transaction.isIncome
                      ? 'var(--color-brand-secondary)'
                      : 'var(--color-brand-accent)'
                  }`,
                }}
              >
                {transaction.amount}
              </TransactionTableData>
              <TransactionTableData>
                <EditButton
                  type="button"
                  onClick={() => dispatch(setTransactionToEdit(transaction))}
                >
                  <Icon icon="icon__edit" />
                </EditButton>
                <SmallButton
                  type="button"
                  onClick={() => TransactionsDeleteHandler(transaction._id)}
                >
                  Delete
                </SmallButton>
              </TransactionTableData>
            </TransactionsBodyHeadRow>
          ))}
        </TransactionsTableBody>
      </TransactionsTable>
    </TransactionContainer>
  );
};

export default Transactions;
