import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import { PrimaryButton } from 'components/Buttons/Buttons';

// padding - top;
// padding - right;
// padding - bottom;
// padding - left;

const TransactionsTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  width: 100%;

  color: #000;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TransactionTableHead = styled.thead`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TransactionsTableHeadRow = styled.tr`
  background-color: #ffa000;
  padding: 30px;
`;

const TransactionsTableHeader = styled.th`
  padding: 15px 0px 15px 30px;
  text-align: left;
  background-color: #cfad70;

  &:first-child {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  &:last-child {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
`;

const TransactionTableBody = styled.tbody``;

const TransactionTableData = styled.td`
  padding: 15px 0px 15px 30px;
  border: none;
  border-bottom: solid 1px #957030;
  box-shadow: 0px 1px 0px rgba(255, 255, 255);
`;

const EditButton = styled.button`
  position: relative;
  border: none;
  background: none;
  width: 14px;
  height: 14px;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 8px;

  & svg {
    fill: none;
    stroke: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SmallButton = styled(PrimaryButton)`
  width: 67px;
  height: 26px;
  color: #fff;
  font-size: 14px;
`;

const TransactionsBodyHeadRow = styled.tr``;

const Transactions = () => {
  return (
    <TransactionsTable>
      <TransactionTableHead>
        <TransactionsTableHeadRow>
          <TransactionsTableHeader>Date</TransactionsTableHeader>
          <TransactionsTableHeader>Type</TransactionsTableHeader>
          <TransactionsTableHeader>Category</TransactionsTableHeader>
          <TransactionsTableHeader>Comment</TransactionsTableHeader>
          <TransactionsTableHeader>Sum</TransactionsTableHeader>
          <TransactionsTableHeader></TransactionsTableHeader>
        </TransactionsTableHeadRow>
      </TransactionTableHead>
      <TransactionTableBody>
        <TransactionsBodyHeadRow>
          <TransactionTableData>04.01.19</TransactionTableData>
          <TransactionTableData>-</TransactionTableData>
          <TransactionTableData>Other</TransactionTableData>
          <TransactionTableData>Gift for your wife</TransactionTableData>
          <TransactionTableData>300.00</TransactionTableData>
          <TransactionTableData>
            <EditButton>
              <Icon class="svg" icon="icon__edit" width="14px" height="14px" />
            </EditButton>{' '}
            <SmallButton>Delete</SmallButton>
          </TransactionTableData>
        </TransactionsBodyHeadRow>
        <TransactionsBodyHeadRow>
          <TransactionTableData>05.01.19</TransactionTableData>
          <TransactionTableData>+</TransactionTableData>
          <TransactionTableData>Income</TransactionTableData>
          <TransactionTableData>January bonus</TransactionTableData>
          <TransactionTableData>8 000.00</TransactionTableData>
          <TransactionTableData>
            <EditButton>
              <Icon className="svg" icon="icon__edit" width="14px" height="14px" />
            </EditButton>{' '}
            Delete
          </TransactionTableData>
        </TransactionsBodyHeadRow>
      </TransactionTableBody>
    </TransactionsTable>
  );
};

export default Transactions;
