import sprite from './assets/icons/icons.svg';
import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/Container/Container';
import DiagramTable from 'components/DiagramTable/DiagramTable';
import { data } from 'components/DiagramTable/data';
import Logo from 'components/Logo/Logo';
import Currency from 'components/Currency/Currency';
import Loader from 'components/Loader/Loader';
import Balance from 'components/Balance/Balance';

function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
        <LoginForm />
        <DiagramTable data={data} />
        <Currency />
        <Loader />
        <Balance />
      </Container>
      <br />
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
      </svg>
      WalletAPP
    </>
  );
}

export default App;
