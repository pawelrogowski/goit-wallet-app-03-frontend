import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';
import Transactions from 'components/Transactions/Transactions';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { data } from 'components/DiagramTable/data';
import { Background } from 'components/Background/Background';
import Switch from 'components/Switch/Switch';

function App() {
  return (
    <>
      <Background />
      <Container>
        <LoginForm />
        <DiagramTable data={data} />
        <Transactions />
        <Switch />
      </Container>
    </>
  );
}

export default App;
