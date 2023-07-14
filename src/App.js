import sprite from './assets/icons/icons.svg';

function App() {
  return (
    <>
      <h1>WalletAPP</h1>
      <svg width={400} height={400}>
        <use href={sprite + '#icon__big-logo'}></use>
      </svg>
    </>
  );
}

export default App;
