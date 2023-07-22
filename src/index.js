import 'modern-normalize/modern-normalize.css';
import './stylesheet/fonts.css';
import './stylesheet/vars.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from './stylesheet/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Background } from 'components/Background/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Background />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
