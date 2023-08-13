import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from 'layout/Layout';
import WithAuthRedirect from './routes/WithAuthRedirect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';
import EditTransactionModal from 'components/EditTransactionModal/EditTransactionModal';
import { motion, AnimatePresence } from 'framer-motion';

const Home = lazy(() => import('pages/HomePage/Home'));
const Register = lazy(() => import('pages/RegistrationPage/RegistrationPage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Statistic = lazy(() => import('pages/StatisticsPage/StatisticsPage'));
const Currency = lazy(() => import('pages/CurrencyPage/CurrencyPage'));

const App = () => {
  const { isModalLogoutOpen, isModalAddTransactionOpen, isModalEditTransactionOpen } = useSelector(
    state => state.global
  );

  return (
    <>
      <AnimatePresence>
        {(isModalLogoutOpen || isModalAddTransactionOpen || isModalEditTransactionOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.08, 0.82, 0.17, 1] }}
            className="modals"
          >
            {isModalLogoutOpen && <ModalLogout />}
            {isModalAddTransactionOpen && <AddTransactionModal />}
            {isModalEditTransactionOpen && <EditTransactionModal />}
          </motion.div>
        )}
      </AnimatePresence>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<WithAuthRedirect children={<Layout />} />}>
            <Route path="/home" element={<Home />} />
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
