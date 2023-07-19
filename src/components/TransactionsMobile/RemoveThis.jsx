import styled, { css } from 'styled-components';
import { PrimaryButton } from 'components/Buttons/Buttons';
import { Icon } from 'components/Icon/Icon';
import { data } from './data';
import { headers } from './data';

const TransactionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TransactionsElement = styled.li``;

const TransactionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
`;

const TransactionElement = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid gray;
  }

  ${({ type }) =>
    type === '+' &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5px;
        background-color: var(--color-brand-secondary);
      }
    `}

  ${({ type }) =>
    type === '-' &&
    css`
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5px;
        background-color: var(--color-brand-accent);
      }
    `}
`;

const TransactionHeader = styled.h3`
  color: var(--font-color-dark);
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const TransactionText = styled.p`
  color: var(--font-color-dark);
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

const EditButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: none;
  background: none;
  cursor: pointer;
  vertical-align: middle;
  padding: 0;

  & svg {
    fill: none;
    stroke: var(--font-color-dark);
    width: 14px;
    height: 14px;
  }
`;

const RemoveThis = () => {
  return (
    <TransactionsList>
      {data.map((item, index) => (
        <TransactionsElement key={index}>
          <TransactionList>
            <TransactionElement type={item.type}>
              <TransactionHeader>{headers[0]}</TransactionHeader>
              <TransactionText>{item.date}</TransactionText>
            </TransactionElement>
            <TransactionElement type={item.type}>
              <TransactionHeader>{headers[1]}</TransactionHeader>
              <TransactionText>{item.type}</TransactionText>
            </TransactionElement>
            <TransactionElement type={item.type}>
              <TransactionHeader>{headers[2]}</TransactionHeader>
              <TransactionText>{item.category}</TransactionText>
            </TransactionElement>
            <TransactionElement type={item.type}>
              <TransactionHeader>{headers[3]}</TransactionHeader>
              <TransactionText>{item.comment}</TransactionText>
            </TransactionElement>
            <TransactionElement type={item.type}>
              <TransactionHeader>{headers[4]}</TransactionHeader>
              <TransactionText>{item.sum}</TransactionText>
            </TransactionElement>
            <TransactionElement type={item.type}>
              <DeleteButton>Delete</DeleteButton>
              <EditButton>
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

export default RemoveThis;
