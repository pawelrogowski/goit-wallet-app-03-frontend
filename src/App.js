import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const { isModalLogoutOpen, isModalAddTransactionOpen, isModalEditTransactionOpen, isLoading } =
    useSelector(state => state.global);
  const [showLoader, setShowLoader] = useState(false);
  const [delayCompleted, setDelayCompleted] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      setDelayCompleted(false);
    } else {
      const loaderTimer = setTimeout(() => {
        setShowLoader(false);
        setDelayCompleted(true);
      }, 500);
      return () => clearTimeout(loaderTimer);
    }
  }, [isLoading]);

  useEffect(() => {
    setShowLoader(true);
    setDelayCompleted(false);
    setTimeout(() => {
      setDelayCompleted(true);
    }, 500);
  }, [location]);

  return (
    <>
      {/* {showLoader && !delayCompleted ? <LoaderGlobal /> : null} */}
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
