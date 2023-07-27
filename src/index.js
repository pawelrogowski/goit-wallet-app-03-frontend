import 'modern-normalize/modern-normalize.css';
import './stylesheet/fonts.css';
import './stylesheet/vars.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './stylesheet/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Background } from 'components/Background/Background';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { TransactionsComponent } from 'components/TestsRedux/TransactionsComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            {/* Background has fixed position, it stays in the viewport with z-index to be at
              the bottom, no need to wrap the App */}
            <Background />
            <App />
            <TransactionsComponent />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
