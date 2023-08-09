import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from 'redux/slices/financeSlice';
import { BalanceSection, BalanceParagraph, AmountParagraph, DollarHolder } from './Balance.styled';
import { formatBalance } from 'utils/numberUtils';

const Balance = () => {
  const dispatch = useDispatch();
  const { totals, transactions } = useSelector(state => state.finance);
  const balance = totals.difference || 0;

  useEffect(() => {
    if (!balance) {
      dispatch(fetchTotals());
    } // eslint-disable-next-line react-hooks/exhaustive-deps
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
