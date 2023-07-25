import { useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../redux/slices/sessionSlice';

export const TestFetchProfile = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const handleError = err => {
      throw new Error(err.message || 'Logout failed');
    };
    try {
      await dispatch(fetchUserProfile());
    } catch (err) {
      handleError(err);
      console.log('Fetch failed:', err.message);
    }
  };

  return <button onClick={handleLogout}>FetchProfile</button>;
};
