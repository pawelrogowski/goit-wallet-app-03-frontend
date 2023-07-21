import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'pages/Layout';

const Dashboard = lazy(() => import('pages/DashboardPage'));
const Register = lazy(() => import('pages/RegisterPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Statistic = lazy(() => import('pages/StatisticPage'));
const Currency = lazy(() => import('pages/CurrencyPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/currency" element={<Currency />} />
      </Route>
    </Routes>
  );
};

export default App;
