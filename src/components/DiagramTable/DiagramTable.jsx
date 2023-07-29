import InputDropdown from 'components/Inputs/InputDropdown';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonthlyTotals, fetchTotals } from 'redux/slices/transactionSlice';
import { fixDigitsToTwoDecimalPlaces, formatNumberWithSpaces } from 'utils/numberUtils';

const StyledTable = styled.div`
  max-width: 395px;
  min-width: 280px;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 336px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 395px;
    height: 500px;
  }
`;

const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 16px;
    flex-direction: row;
    div {
      max-width: 160px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 32px;
    flex-direction: row;
    div {
      max-width: 182px;
    }
  }
`;
const BoxHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background: var(--background-light);

  h3 {
    color: var(--font-color-dark);
    font-family: 'Circe';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 16px 28px;
    margin: 0;
  }
`;
const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  height: 100%;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-logout-button);
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-logout-button);
  }
  mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  mask-size: 100% 20000px;
  mask-position: left bottom;
  -webkit-mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 4px, black 4px);
  -webkit-mask-size: 100% 20000px;
  -webkit-mask-position: left bottom;
  transition: mask-position 0.3s, -webkit-mask-position 0.3s;

  &:hover {
    -webkit-mask-position: left top;
    mask-position: left top;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  font-family: 'Circe';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
const ColorCategory = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: block;
`;
const Category = styled.p`
  color: var(--font-color-dark);
  margin: 0;
  padding: 14px 16px;
  flex-grow: 2;
`;
const Sum = styled.p`
  margin: 0;
  color: var(--font-color-dark);
`;
const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 28px;
  color: var(--font-color-dark);
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Expenses = styled.p`
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 0;
  line-height: 18px;
  span {
    color: var(--color-brand-accent);
    text-align: right;
  }
`;
const Income = styled.p`
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  padding: 16px 0;
  line-height: 18px;
  span {
    color: var(--color-brand-secondary);
    text-align: right;
  }
`;

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

const year = [
  { year: '2019' },
  { year: '2020' },
  { year: '2021' },
  { year: '2022' },
  { year: '2023' },
  { year: '2024' },
];

const yearOptions = year.map(option => ({
  ...option,
  label: option.year,
  value: option.year,
}));

const DiagramTableBase = () => {
  const dispatch = useDispatch();
  const { totals, monthlyTotals, transactions } = useSelector(state => state.transactions);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  useEffect(() => {
    dispatch(fetchTotals());
  }, [dispatch, transactions]);

  const handleMonthChange = values => {
    setSelectedMonth(values);
    if (selectedYear !== '') {
      dispatch(fetchMonthlyTotals({ month: values, year: selectedYear }));
    }
  };

  const handleYearChange = values => {
    setSelectedYear(values);

    if (selectedMonth !== '') {
      dispatch(fetchMonthlyTotals({ month: selectedMonth, year: values }));
    }
  };

  const showTotals = selectedMonth && selectedYear && monthlyTotals && monthlyTotals.totals;
  const dataToMap = showTotals ? monthlyTotals.totals : totals.totals;

  const sumExpenses = showTotals ? monthlyTotals.totalExpenses : totals.totalExpenses || 0;
  const sumIncome = showTotals ? monthlyTotals.totalIncome : totals.totalIncome || 0;
  const formatSum = num => formatNumberWithSpaces(fixDigitsToTwoDecimalPlaces(num));
  return (
    <>
      <StyledTable className="minus-margin-top">
        <BoxInputs>
          <InputDropdown
            title={'Month'}
            options={monthsOptions}
            onChange={([{ id }]) => handleMonthChange(id)}
          />
          <InputDropdown
            title={'Year'}
            options={yearOptions}
            onChange={([{ value }]) => handleYearChange(value)}
          />
        </BoxInputs>
        <BoxHeading>
          <h3>Category</h3>
          <h3>Sum</h3>
        </BoxHeading>
        <List>
          {dataToMap && dataToMap.length > 0 ? (
            dataToMap.map((item, index) => (
              <ListItem key={index}>
                <ColorCategory style={{ backgroundColor: `${item.color}` }}></ColorCategory>
                <Category>{item.category}</Category>
                <Sum>{formatSum(item.sum) || 0}</Sum>
              </ListItem>
            ))
          ) : (
            <li>No data available for the selected month and year.</li>
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
    </>
  );
};
const DiagramTable = styled(DiagramTableBase)``;
export default DiagramTable;
