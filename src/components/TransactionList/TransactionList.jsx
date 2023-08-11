import { useSelector, useDispatch } from 'react-redux';
import { formatDate, makeProperDate } from 'utils/formaters';
import { removeTransaction, setTransactionToEdit } from 'redux/slices/financeSlice';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { formatStringWithSpaces, MakeDecimalPlaces } from 'utils/formaters';
import { DeleteButton } from 'components/Buttons/Buttons';
import { EditButton, TransactionContainer, TransactionRow, Sum } from './TransactionList.styled';
import { TransactionHeader } from './TransactionHeader/TransactionHeader';
import { Icon } from 'components/Icon/Icon';
import { motion } from 'framer-motion';

const TransactionsTable = () => {
  const dispatch = useDispatch();

  const handleOpenEditModal = () => {
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const { transactions } = useSelector(state => state.finance);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return makeProperDate(b.date) - makeProperDate(a.date);
  });

  const transactionsDeleteHandler = id => {
    dispatch(removeTransaction(id));
  };

  const transactionVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const itemStyle = {
    opacity: 0,
    transformOrigin: 'bottom',
  };

  return (
    <>
      <TransactionHeader />
      <TransactionContainer>
        {sortedTransactions.map((transaction, index) => (
          <motion.li
            key={transaction._id}
            style={itemStyle}
            variants={transactionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <li key={transaction._id}>
              <TransactionRow $variant={index === 0 ? null : 'border'}>
                <li>{formatDate(transaction.date)}</li>
                <li>{transaction.isIncome ? '+' : '-'}</li>
                <li>{transaction.category}</li>
                <li>{transaction.comment}</li>
                <Sum $isIncome={transaction.isIncome}>
                  {formatStringWithSpaces(MakeDecimalPlaces(transaction.amount))}
                </Sum>
                <li>
                  <EditButton
                    onClick={() => {
                      dispatch(setTransactionToEdit(transaction));
                      handleOpenEditModal();
                    }}
                  >
                    <Icon icon={'icon__edit'} />
                  </EditButton>
                  <DeleteButton onClick={() => transactionsDeleteHandler(transaction._id)}>
                    Delete
                  </DeleteButton>
                </li>
              </TransactionRow>
            </li>
          </motion.li>
        ))}
      </TransactionContainer>
    </>
  );
};

export default TransactionsTable;
