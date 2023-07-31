import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotals } from 'redux/slices/transactionSlice';
import { BalanceSection, BalanceParagraph, AmountParagraph, DollarHolder } from './Balance.styled';
import {
  fixDigitsToTwoDecimalPlaces,
  formatNumberWithSpaces,
  formatCompactNumber,
} from 'utils/numberUtils';

const Balance = () => {
  const dispatch = useDispatch();
  const { totals, transactions } = useSelector(state => state.transactions);
  const balance = totals.difference || 0;

  const formatBalance = num => {
    if (Math.abs(num) > 10000000) {
      return formatCompactNumber(num);
    }
    return formatNumberWithSpaces(fixDigitsToTwoDecimalPlaces(num));
  };
  // Fetch totals when page is refresh and when transaction object is changed
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
