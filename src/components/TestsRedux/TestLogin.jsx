import { useEffect, useState } from 'react';
import { login, register } from '../../redux/slices/sessionSlice';
import { useDispatch, useSelector } from 'react-redux';

export const TestLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const token = useSelector(state => state.session.token);
  const isAuth = useSelector(state => state.session.isAuth);

  const [loginTriggered, setLoginTriggered] = useState(false);
  const [registerTriggered, setRegisterTriggered] = useState(false);

  useEffect(() => {
    if (loginTriggered && user && Object.keys(user).length > 0) {
      console.log('user object saved in redux');
    }
    if (token) {
      console.log('token saved in redux');
    }
    if (isAuth) {
      console.log('isAuth flag changed to', isAuth);
    }
  }, [loginTriggered, registerTriggered, user, token, isAuth]);

  const handleLogin = async () => {
    dispatch(login({ email: 'test@test.com', password: 'password12345' })); // change this to login different accounts
    setLoginTriggered(true);
  };

  const handleRegister = async () => {
    const email = 'test256677@test.com'; // Replace with new user's email after each register
    const password = 'password12345';

    await dispatch(
      register({
        name: 'TEST',
        email,
        password,
      })
    );
    setRegisterTriggered(true);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
