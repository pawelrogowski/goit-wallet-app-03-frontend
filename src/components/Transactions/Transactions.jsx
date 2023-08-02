import { Icon } from 'components/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate, makeProperDate, truncateString } from 'utils/formaters';
import { removeTransaction, setTransactionToEdit } from 'redux/slices/transactionSlice';
import { setIsModalEditTransactionOpen } from 'redux/slices/globalSlice';
import { formatStringWithSpaces, MakeDecimalPlaces } from 'utils/formaters';
import { DeleteButton } from 'components/Buttons/Buttons';
import {
  EditButton,
  TransactionContainer,
  TransactionTableData,
  TransactionsBodyHeadRow,
  TransactionsTable,
  TransactionsTableBody,
  TransactionsTableHead,
  TransactionsTableHeadRow,
  TransactionsTableHeader,
  TransactionFade,
} from './Transactions.styled';

const headers = ['Date', 'Type', 'Category', 'Comment', 'Sum', ''];

const Transactions = () => {
  const dispatch = useDispatch();

  const handleOpenEditModal = () => {
    dispatch(setIsModalEditTransactionOpen(true));
  };

  const { transactions } = useSelector(state => state.finance);

  const sortedTransactions = transactions.slice().sort((a, b) => {
    return makeProperDate(b.date) - makeProperDate(a.date);
  });

  const TransactionsDeleteHandler = id => {
    dispatch(removeTransaction(id));
  };

  return (
    <>
      <TransactionFade>
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
                  <TransactionTableData>{truncateString(transaction.comment)}</TransactionTableData>
                  <TransactionTableData
                    style={{
                      color: `${
                        transaction.isIncome
                          ? 'var(--color-brand-secondary)'
                          : 'var(--color-brand-accent)'
                      }`,
                    }}
                  >
                    {formatStringWithSpaces(MakeDecimalPlaces(transaction.amount))}
                  </TransactionTableData>
                  <TransactionTableData>
                    <EditButton
                      type="button"
                      onClick={() => {
                        dispatch(setTransactionToEdit(transaction));
                        handleOpenEditModal();
                      }}
                    >
                      <Icon icon="icon__edit" />
                    </EditButton>
                    <DeleteButton
                      type="button"
                      onClick={() => TransactionsDeleteHandler(transaction._id)}
                    >
                      Delete
                    </DeleteButton>
                  </TransactionTableData>
                </TransactionsBodyHeadRow>
              ))}
            </TransactionsTableBody>
          </TransactionsTable>
        </TransactionContainer>
      </TransactionFade>
    </>
  );
};

export default Transactions;
