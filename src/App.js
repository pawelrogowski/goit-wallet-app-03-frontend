import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';
import Transactions from 'components/Transactions/Transactions';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { data } from 'components/DiagramTable/data';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import { Background } from 'components/Background/Background';

function App() {
  return (
    <>
      <Background />
      <Container>
        <Logo></Logo>
        <Navigation />
        <LoginForm />
        <DiagramTable data={data} />
        <Transactions />
      </Container>
    </>
  );
}

export default App;
