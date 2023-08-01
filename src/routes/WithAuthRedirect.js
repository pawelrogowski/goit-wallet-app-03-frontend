import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const WithAuthRedirect = ({ children }) => {
  const isAuth = useSelector(state => state.session.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default WithAuthRedirect;
