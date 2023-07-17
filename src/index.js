import 'modern-normalize/modern-normalize.css';
import './stylesheet/fonts.css';
import './stylesheet/vars.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { theme } from './stylesheet/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
