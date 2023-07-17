import styled from 'styled-components';

// padding - top;
// padding - right;
// padding - bottom;
// padding - left;

const TransactionsTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  width: 100%;
`;

const TransactionTableHead = styled.thead``;

const TransactionsTableHeadRow = styled.tr`
  background-color: #ffa000;
  color: #ffffff;
  padding: 30px;
`;

const TransactionsTableHeader = styled.th`
  padding: 30px;
  text-align: left;
  background-color: #cfad70;
  color: #fff;

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
  padding: 20px 0px 20px 30px;
  border: none;
  border-bottom: solid 1px #957030;
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
          <TransactionTableData>ic Delete</TransactionTableData>
        </TransactionsBodyHeadRow>
        <TransactionsBodyHeadRow>
          <TransactionTableData>05.01.19</TransactionTableData>
          <TransactionTableData>+</TransactionTableData>
          <TransactionTableData>Income</TransactionTableData>
          <TransactionTableData>January bonus</TransactionTableData>
          <TransactionTableData>8 000.00</TransactionTableData>
          <TransactionTableData>ic Delete</TransactionTableData>
        </TransactionsBodyHeadRow>
      </TransactionTableBody>
    </TransactionsTable>
  );
};

export default Transactions;
