import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import { PrimaryButton } from 'components/Buttons/Buttons';
import { data } from './data';
import { headers } from './data';

const TransactionsTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  width: 100%;
  color: var(--font-color-dark);
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TransactionsTableHead = styled.thead`
  font-size: 18px;
  font-weight: 700;
`;

const TransactionsTableHeadRow = styled.tr``;

const TransactionsTableHeader = styled.th`
  padding: 15px 0px 15px 20px;
  text-align: left;
  background-color: var(--background-light);

  &:first-child {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  &:last-child {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(5) {
    text-align: right;
  }
`;

const TransactionsTableBody = styled.tbody``;

const TransactionTableData = styled.td`
  padding: 15px 0px 15px 20px;
  border: none;
  border-bottom: solid 1px var(--background-gray);
  box-shadow: 0px 1px 0px var(--background-light);
  vertical-align: middle;

  &:nth-child(2) {
    text-align: center;
  }

  &:nth-child(5) {
    text-align: right;
    font-weight: 700;
  }

  &:last-child {
    text-align: center;
  }
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
    stroke: var(--font-color-dark);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
  }
`;

const SmallButton = styled(PrimaryButton)`
  width: 67px;
  height: 26px;
  color: var(--background-light);
  font-size: 14px;
  letter-spacing: normal;
  padding: 0;
`;

const TransactionsBodyHeadRow = styled.tr``;

const Transactions = () => {
  return (
    <TransactionsTable>
      <TransactionsTableHead>
        <TransactionsTableHeadRow>
          {headers.map((item, index) => (
            <TransactionsTableHeader key={index}>{item}</TransactionsTableHeader>
          ))}
        </TransactionsTableHeadRow>
      </TransactionsTableHead>
      <TransactionsTableBody>
        {data.map((item, index) => (
          <TransactionsBodyHeadRow key={index}>
            <TransactionTableData>{item.date}</TransactionTableData>
            <TransactionTableData>{item.type}</TransactionTableData>
            <TransactionTableData>{item.category}</TransactionTableData>
            <TransactionTableData>{item.comment}</TransactionTableData>
            <TransactionTableData
              style={{
                color: `${
                  item.type === '-' ? 'var(--color-brand-accent)' : 'var(--color-brand-secondary)'
                }`,
              }}
            >
              {item.sum}
            </TransactionTableData>
            <TransactionTableData>
              <EditButton>
                <Icon icon="icon__edit" />
              </EditButton>{' '}
              <SmallButton>Delete</SmallButton>
            </TransactionTableData>
          </TransactionsBodyHeadRow>
        ))}
      </TransactionsTableBody>
    </TransactionsTable>
  );
};

export default Transactions;
