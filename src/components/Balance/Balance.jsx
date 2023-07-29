import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from 'redux/slices/transactionSlice';
import styled from 'styled-components';

const BalanceSection = styled.div`
  max-width: 395px;
  min-width: 280px;
  width: 100%;
  background-color: var(--background-light);
  border-radius: 30px;
  padding-left: 40px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  //   margin-top: 12px;
  // }
`;
const BalanceParagraph = styled.p`
  margin: 0;
  color: #a6a6a6;
  font-family: Circe;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  text-transform: uppercase;
`;
const AmountParagraph = styled.p`
  margin: 0;
  color: var(--font-color-dark);
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;
const DollarHolder = styled.span`
  font-weight: 400;
`;

const Balance = () => {
  const dispatch = useDispatch();
  const { totals, transactions } = useSelector(state => state.transactions);
  const balance = totals.difference;

  // Fetch totals when page is refresh and when transaction object is changed
  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch, transactions]);

  return (
    <BalanceSection>
      <BalanceParagraph>Your Balance</BalanceParagraph>
      <AmountParagraph>
        <DollarHolder>$</DollarHolder> {balance}
      </AmountParagraph>
    </BalanceSection>
  );
};

export default Balance;
