import styled from 'styled-components';
import { PrimaryButton } from 'components/Buttons/Buttons';

const TransactionsList = styled.ul`
  list-style: none;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  margin: 0;
  border: 2px solid gray;
`;

const TransactionsElement = styled.li`
  border-radius: 0;
`;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TransactionElement = styled.li`
  border-left: 5px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;

const TransactionHeader = styled.h3`
  color: #000;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const TransactionText = styled.p`
  color: #000;
  text-align: right;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const DeleteButton = styled(PrimaryButton)`
  width: 67px;
  height: 26px;
  color: var(--background-light);
  font-size: 14px;
  letter-spacing: normal;
  padding: 0px;

  &:not(:last-of-type) {
    margin-bottom: 0px;
  }
`;

const TransactionsMobile = () => {
  return (
    <TransactionsList>
      <TransactionsElement>
        <TransactionList>
          <TransactionElement>
            <TransactionHeader>Date</TransactionHeader>
            <TransactionText>04.01.19</TransactionText>
          </TransactionElement>
          <TransactionElement>
            <TransactionHeader>Type</TransactionHeader>
            <TransactionText>-</TransactionText>
          </TransactionElement>
          <TransactionElement>
            <TransactionHeader>Category</TransactionHeader>
            <TransactionText>Other</TransactionText>
          </TransactionElement>
          <TransactionElement>
            <TransactionHeader>Comment</TransactionHeader>
            <TransactionText>Gift for your wife</TransactionText>
          </TransactionElement>
          <TransactionElement>
            <TransactionHeader>Sum</TransactionHeader>
            <TransactionText>300.00</TransactionText>
          </TransactionElement>
          <TransactionElement>
            <DeleteButton>Delete</DeleteButton>
            <button>Edit</button>
          </TransactionElement>
        </TransactionList>
      </TransactionsElement>
    </TransactionsList>
  );
};

export default TransactionsMobile;
