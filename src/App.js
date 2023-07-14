import sprite from './assets/icons/icons.svg';
import logo from './assets/icons/big-logo.svg';
function App() {
  return (
    <>
      <h1>WalletAPP</h1>
      <svg width={400} height={400} fill="red">
        <use href={sprite + '#icon__logo'}></use>
      </svg>
      <img alt="logo" src={logo} />
    </>
  );
}

export default App;
