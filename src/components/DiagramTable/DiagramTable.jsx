import InputDropdown from 'components/Inputs/InputDropdown';
import styled from 'styled-components';
import { data } from './data';

const StyledTable = styled.div`
  max-width: 395px;
  min-width: 280px;
  width: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 336px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 500px;
  }
`;

const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    div {
      width: 160px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    div {
      width: 220px;
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

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    overflow-y: auto;
    max-height: 450px;

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
  line-height: normal;
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
  padding: 16px 16px;
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
  value: option.name,
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
  const sumExpenses = data
    .map(item => parseFloat(item.sum.replace(/\s+/g, '')))
    .reduce((total, value) => total + value, 0)
    .toFixed(2);

  return (
    <>
      <StyledTable>
        <BoxInputs>
          <InputDropdown title={'Month'} options={monthsOptions} />
          <InputDropdown title={'Year'} options={yearOptions} />
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
            Income: <span>27 350.00</span>
          </Income>
        </BoxFooter>
      </StyledTable>
    </>
  );
};

export default DiagramTable;
