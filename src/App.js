import sprite from './assets/icons/icons.svg';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';
import Transactions from 'components/Transactions/Transactions';

function App() {
  return (
    <>
      <Container>
        <LoginForm />
      </Container>
      <Container>
        <Transactions />
      </Container>
      <h1>WalletAPP</h1>
      <svg width={400} height={400}>
        <use href={sprite + '#icon__big-logo-man1'}></use>
      </svg>
      <svg width={400} height={400}>
        <use href={sprite + '#icon__big-logo-man2'}></use>
      </svg>
      <svg width={400} height={400}>
        <use href={sprite + '#icon__big-logo-woman1'}></use>
      </svg>
      <svg width={400} height={400}>
        <use href={sprite + '#icon__big-logo-woman2'}></use>
      </svg>
      <svg width={400} height={400}>
        <use href={sprite + '#icon__logo'}></use>
      </svg>{' '}
      WalletAPP
    </>
  );
}

export default App;
