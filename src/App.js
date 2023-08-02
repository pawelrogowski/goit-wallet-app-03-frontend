import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import Layout from 'layout/Layout';
import WithAuthRedirect from './routes/WithAuthRedirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';
import EditTransactionModal from 'components/EditTransactionModal/EditTransactionModal';
import { LoaderGlobal } from 'components/Loader/LoaderGlobal';

const Dashboard = lazy(() => import('pages/DashboardPage/DashboardPage'));
const Register = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Statistic = lazy(() => import('pages/StatisticsPage/StatisticsPage'));
const Currency = lazy(() => import('pages/CurrencyPage/CurrencyPage'));

const App = () => {
  const { isModalLogoutOpen, isModalAddTransactionOpen, isModalEditTransactionOpen, isLoading } =
    useSelector(state => state.global);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    } else {
      const loaderTimer = setTimeout(() => {
        setShowLoader(false);
      }, 500);
      return () => clearTimeout(loaderTimer);
    }
  }, [isLoading]);

  return (
    <>
      {showLoader ? <LoaderGlobal /> : null}
      {isModalLogoutOpen && <ModalLogout />}
      {isModalAddTransactionOpen && <AddTransactionModal />}
      {isModalEditTransactionOpen && <EditTransactionModal />}
      <Suspense>
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
        <ToastContainer position="top-center" autoClose={2500} pauseOnHover={false} />
      </Suspense>
    </>
  );
};

export default App;
