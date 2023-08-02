import { Icon } from 'components/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate, makeProperDate, truncateString } from 'utils/formaters';
import { removeTransaction, setTransactionToEdit } from 'redux/slices/transactionSlice';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { formatStringWithSpaces, MakeDecimalPlaces } from 'utils/formaters';
import { DeleteButton } from 'components/Buttons/Buttons';
import {
  EditButton,
  TransactionElement,
  TransactionHeader,
  TransactionList,
  TransactionText,
  TransactionsElement,
  TransactionsList,
} from './TransactionsMobile.styled';
import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

const headers = ['Date', 'Type', 'Category', 'Comment', 'Sum', ''];

const TransactionsMobile = () => {
  const dispatch = useDispatch();

  const { transactions } = useSelector(state => state.transactions);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return makeProperDate(b.date) - makeProperDate(a.date);
  });

  const handleOpenEditModal = () => {
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const TransactionsDeleteHandler = id => {
    dispatch(removeTransaction(id));
  };

  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate('li', { opacity: [0, 1] }, { delay: stagger(0.06) });
  }, [animate, sortedTransactions]);
  return (
    <TransactionsList ref={scope}>
      {sortedTransactions && sortedTransactions.length > 0 ? (
        sortedTransactions.map(transaction => (
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
                <TransactionText>{truncateString(transaction.comment)}</TransactionText>
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
                  {formatStringWithSpaces(MakeDecimalPlaces(transaction.amount))}
                </TransactionText>
              </TransactionElement>
              <TransactionElement>
                <DeleteButton onClick={() => TransactionsDeleteHandler(transaction._id)}>
                  Delete
                </DeleteButton>
                <EditButton
                  type="button"
                  onClick={() => {
                    dispatch(setTransactionToEdit(transaction));
                    handleOpenEditModal();
                  }}
                >
                  <Icon icon="icon__edit" />
                  Edit
                </EditButton>
              </TransactionElement>
            </TransactionList>
          </TransactionsElement>
        ))
      ) : (
        <li></li>
      )}
    </TransactionsList>
  );
};

export default TransactionsMobile;
