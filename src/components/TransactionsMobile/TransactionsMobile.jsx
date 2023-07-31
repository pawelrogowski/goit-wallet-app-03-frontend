import { Icon } from 'components/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate, makeProperDate } from 'utils/formaters';
import { removeTransaction, setTransactionToEdit } from 'redux/slices/transactionSlice';
import {
  DeleteButton,
  EditButton,
  TransactionElement,
  TransactionHeader,
  TransactionList,
  TransactionText,
  TransactionsElement,
  TransactionsList,
} from './TransactionsMobile.styled';

const headers = ['Date', 'Type', 'Category', 'Comment', 'Sum', ''];

const TransactionsMobile = () => {
  const dispatch = useDispatch();

  const { transactions } = useSelector(state => state.transactions);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return makeProperDate(b.date) - makeProperDate(a.date);
  });

  const TransactionsDeleteHandler = id => {
    dispatch(removeTransaction(id));
  };

  return (
    <TransactionsList>
      {sortedTransactions.map(transaction => (
        <TransactionsElement key={transaction._id}>
          <TransactionList type={transaction.isIncome ? 1 : 0}>
            <TransactionElement>
              <TransactionHeader>{headers[0]}</TransactionHeader>
              <TransactionText>{formatDate(transaction.date)}</TransactionText>
            </TransactionElement>
            <TransactionElement>
              <TransactionHeader>{headers[1]}</TransactionHeader>
              <TransactionText>{transaction.isIncome ? '+' : '-'}</TransactionText>
            </TransactionElement>
            <TransactionElement>
              <TransactionHeader>{headers[2]}</TransactionHeader>
              <TransactionText>{transaction.category}</TransactionText>
            </TransactionElement>
            <TransactionElement>
              <TransactionHeader>{headers[3]}</TransactionHeader>
              <TransactionText>{transaction.comment}</TransactionText>
            </TransactionElement>
            <TransactionElement>
              <TransactionHeader>{headers[4]}</TransactionHeader>
              <TransactionText
                style={{
                  color: `${
                    transaction.isIncome
                      ? 'var(--color-brand-secondary)'
                      : 'var(--color-brand-accent)'
                  }`,
                }}
              >
                {transaction.amount}
              </TransactionText>
            </TransactionElement>
            <TransactionElement>
              <DeleteButton onClick={() => TransactionsDeleteHandler(transaction._id)}>
                Delete
              </DeleteButton>
              <EditButton type="button" onClick={() => dispatch(setTransactionToEdit(transaction))}>
                <Icon icon="icon__edit" />
                Edit
              </EditButton>
            </TransactionElement>
          </TransactionList>
        </TransactionsElement>
      ))}
    </TransactionsList>
  );
};

export default TransactionsMobile;
