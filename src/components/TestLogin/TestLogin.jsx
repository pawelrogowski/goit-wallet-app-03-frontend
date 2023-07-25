import { useEffect } from 'react';
import { login } from '../../redux/slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const TestLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(
      login({
        email: 'test@test.com',
        password: 'password12345',
      })
    );
  };

  return <button onClick={handleLogin}>Login</button>;
};
