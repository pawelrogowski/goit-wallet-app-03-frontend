import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/sessionSlice';

export const TestLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const handleError = err => {
      throw new Error(err.message || 'Logout failed');
    };
    try {
      await dispatch(logout());
    } catch (err) {
      handleError(err);
      console.log('Logout failed:', err.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};
