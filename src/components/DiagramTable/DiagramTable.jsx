import InputDropdown from 'components/Inputs/InputDropdown';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMonthlyTotals } from 'redux/slices/transactionSlice';

const StyledTable = styled.div`
  max-width: 395px;
  min-width: 280px;
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 336px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 395px;
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

const DiagramTable = () => {
  const { totals, monthlyTotals } = useSelector(state => state.transactions);
  const dispatch = useDispatch();

  const sumExpenses = totals.totalExpenses;
  const sumIncome = totals.totalIncome;
  const data = totals.totals;

  const [valueMonth, setValueMonth] = useState('');
  const [valueYear, setValueYear] = useState('');

  console.log(monthlyTotals.totals);

  useEffect(() => {
    dispatch(fetchMonthlyTotals({ month: valueMonth, year: valueYear }));
  }, [dispatch, valueYear, valueMonth]);

  return (
    <>
      <StyledTable>
        <BoxInputs>
          <InputDropdown
            title={'Month'}
            options={monthsOptions}
            onChange={([{ id }]) => setValueMonth(id)}
          />
          <InputDropdown
            title={'Year'}
            options={yearOptions}
            onChange={([{ value }]) => setValueYear(value)}
          />
        </BoxInputs>
        <BoxHeading>
          <h3>Category</h3>
          <h3>Sum</h3>
        </BoxHeading>
        <List>
          {data.map((item, index) => (
            <ListItem key={index}>
              <ColorCategory style={{ backgroundColor: `${item.color}` }}></ColorCategory>
              <Category>{item.category}</Category>
              <Sum>{item.sum}</Sum>
            </ListItem>
          ))}
        </List>
        <BoxFooter>
          <Expenses>
            Expenses: <span>{sumExpenses}</span>
          </Expenses>
          <Income>
            Income: <span>{sumIncome}</span>
          </Income>
        </BoxFooter>
      </StyledTable>
    </>
  );
};

export default DiagramTable;
