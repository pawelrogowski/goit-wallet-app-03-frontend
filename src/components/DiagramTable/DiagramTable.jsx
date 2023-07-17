import styled from 'styled-components';

const StyledTable = styled.div`
  max-width: 395px;
  min-width: 280px;
`;

const BoxHeading = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  background: var(--background-light);

  h3 {
    color: #000;
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
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  border-bottom: 1px solid #dcdcdf;
  filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.6));
  font-family: Circe;
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
  margin-left: 16px;
  flex-grow: 2;
`;
const Sum = styled.p`
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
  span {
    color: var(--color-brand-accent);
    text-align: right;
  }
`;
const Income = styled.p`
  display: inline-flex;
  justify-content: space-between;
  span {
    color: var(--color-brand-secondary);
    text-align: right;
  }
`;

const DiagramTable = ({ data }) => (
  <StyledTable>
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
        Expenses: <span>22 549.24</span>
      </Expenses>
      <Income>
        Income: <span>27 350.00</span>
      </Income>
    </BoxFooter>
  </StyledTable>
);

export default DiagramTable;
