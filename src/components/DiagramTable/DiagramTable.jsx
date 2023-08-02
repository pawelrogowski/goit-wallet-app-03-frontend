import InputDropdown from 'components/Inputs/InputDropdown';
import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMonthlyTotals,
  fetchTotals,
  setSelectedMonth,
  setSelectedYear,
} from 'redux/slices/transactionSlice';
import {
  BoxFooter,
  BoxHeading,
  BoxInputs,
  Category,
  ColorCategory,
  Expenses,
  Income,
  List,
  ListItem,
  StyledTable,
  Sum,
} from './DiagramTable.styled';
import styled from 'styled-components';
import { formatStringWithSpaces, MakeDecimalPlaces } from 'utils/formaters';

const months = [
  { id: 1, name: 'January' },
  { id: 2, name: 'February' },
  { id: 3, name: 'March' },
  { id: 4, name: 'April' },
  { id: 5, name: 'May' },
  { id: 6, name: 'June' },
  { id: 7, name: 'July' },
  { id: 8, name: 'August' },
  { id: 9, name: 'September' },
  { id: 10, name: 'October' },
  { id: 11, name: 'November' },
  { id: 12, name: 'December' },
];

const monthsOptions = months.map(option => ({
  ...option,
  label: option.name,
  value: option.name.toLowerCase(),
}));

const getFullMonthName = monthNumber => {
  if (typeof monthNumber !== 'number' || monthNumber < 1 || monthNumber > 12) {
    return 'Month';
  }
  const fullMonthName = months.find(month => month.id === monthNumber);
  return fullMonthName.name;
};

const currentYear = new Date().getFullYear();

const getNumberRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};
const year = getNumberRange(currentYear - 5, currentYear).map(value => ({ year: value }));

const yearOptions = year.map(option => ({
  ...option,
  label: option.year,
  value: option.year,
}));

const DiagramTableBase = () => {
  const dispatch = useDispatch();
  const { totals, monthlyTotals, transactions } = useSelector(state => state.transactions);
  const { selectedMonth, selectedYear } = useSelector(state => state.transactions);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch, transactions]);

  const handleMonthChange = month => {
    dispatch(setSelectedMonth(month));
    if (selectedYear !== null && month !== null) {
      dispatch(fetchMonthlyTotals({ month: month, year: selectedYear }));
    }
  };

  const handleYearChange = year => {
    dispatch(setSelectedYear(year));
    if (selectedMonth !== null && year !== null) {
      dispatch(fetchMonthlyTotals({ month: selectedMonth, year: year }));
    }
  };

  const showTotals = selectedMonth && selectedYear && monthlyTotals && monthlyTotals.totals;
  const dataToMap = showTotals ? monthlyTotals.totals : totals.totals;

  useEffect(() => {
    animate('li', { opacity: [0, 1] }, { delay: stagger(0.2) });
  }, [animate, scope, dataToMap]);

  const sumExpenses = showTotals ? monthlyTotals.totalExpenses : totals.totalExpenses || 0;
  const sumIncome = showTotals ? monthlyTotals.totalIncome : totals.totalIncome || 0;
  const formatSum = num => formatStringWithSpaces(MakeDecimalPlaces(num));
  return (
    <StyledTable>
      <BoxInputs>
        <InputDropdown
          title={selectedMonth ? getFullMonthName(selectedMonth) : 'Month'}
          options={monthsOptions}
          onChange={([{ id }]) => handleMonthChange(id)}
        />
        <InputDropdown
          title={selectedYear ? selectedYear : 'Year'}
          options={yearOptions}
          onChange={([{ value }]) => handleYearChange(value)}
        />
      </BoxInputs>
      <BoxHeading>
        <h3>Category</h3>
        <h3>Sum</h3>
      </BoxHeading>
      <List ref={scope}>
        {dataToMap && dataToMap.length > 0 ? (
          dataToMap.map((item, index) => (
            <ListItem key={index}>
              <ColorCategory style={{ backgroundColor: `${item.color}` }}></ColorCategory>
              <Category>{item.category}</Category>
              <Sum>{formatSum(item.sum) || 0}</Sum>
            </ListItem>
          ))
        ) : (
          <li></li>
        )}
      </List>
      <BoxFooter>
        <Expenses>
          Expenses: <span>{formatSum(sumExpenses)}</span>
        </Expenses>
        <Income>
          Income: <span>{formatSum(sumIncome)}</span>
        </Income>
      </BoxFooter>
    </StyledTable>
  );
};

const DiagramTable = styled(DiagramTableBase)``;
export default DiagramTable;
