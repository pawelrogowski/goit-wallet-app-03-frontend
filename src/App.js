import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'pages/Layout';
import WithAuthRedirect from './routes/WithAuthRedirect';

const Dashboard = lazy(() => import('pages/DashboardPage'));
const Register = lazy(() => import('pages/RegistrationPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Statistic = lazy(() => import('pages/StatisticPage'));
const Currency = lazy(() => import('pages/CurrencyPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<WithAuthRedirect children={<Layout />} />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistic />} />
        <Route path="/currency" element={<Currency />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
