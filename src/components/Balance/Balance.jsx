import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from 'redux/slices/transactionSlice';
import { BalanceSection, BalanceParagraph, AmountParagraph, DollarHolder } from './Balance.styled';
import { formatBalance } from 'utils/numberUtils';

const Balance = () => {
  const dispatch = useDispatch();
  const { totals, transactions } = useSelector(state => state.finance);
  const balance = totals.difference || 0;

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch, transactions]);

  return (
    <BalanceSection>
      <BalanceParagraph>Your Balance</BalanceParagraph>
      <AmountParagraph>
        <DollarHolder>$</DollarHolder> {formatBalance(balance)}
      </AmountParagraph>
    </BalanceSection>
  );
};

export default Balance;
