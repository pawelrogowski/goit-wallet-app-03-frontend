import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'pages/Layout';
import WithAuthRedirect from './routes/WithAuthRedirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';
// import EditTransactionModal from 'components/EditTransactionModal/EditTransactionModal';
const Dashboard = lazy(() => import('pages/DashboardPage'));
const Register = lazy(() => import('pages/RegistrationPage'));
const Login = lazy(() => import('pages/LoginPage'));
const Statistic = lazy(() => import('pages/StatisticPage'));
const Currency = lazy(() => import('pages/CurrencyPage'));

const App = () => {
  // isModalEditTransactionOpen  -- add this to the object below when ready
  const { isModalLogoutOpen, isModalAddTransactionOpen } = useSelector(state => state.global);

  return (
    <Suspense fallback={null}>
      {isModalLogoutOpen && <ModalLogout />}
      {isModalAddTransactionOpen && <AddTransactionModal />}
      {/* {isModalEditTransactionOpen && <EditTransactionModal />} */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<WithAuthRedirect children={<Layout />} />}>
          <Route index element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/diagram" element={<Statistic />} />
          <Route path="/currency" element={<Currency />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2500} pauseOnHover="false" />
    </Suspense>
  );
};

export default App;
