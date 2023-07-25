import { useEffect, useState } from 'react';
import { login, register } from '../../redux/slices/sessionSlice';
import { useDispatch, useSelector } from 'react-redux';

// TEST USER:
// {
//   email: 'test@test.com',
//   password: 'password12345',
// }

export const TestLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const token = useSelector(state => state.session.token);
  const isAuth = useSelector(state => state.session.isAuth);

  const [loginTriggered, setLoginTriggered] = useState(false);
  const [registerTriggered, setRegisterTriggered] = useState(false);

  useEffect(() => {
    if (loginTriggered && user && Object.keys(user).length > 0) {
      console.log('USER:', user);
    }
    if (token) {
      console.log('Token', token);
    }
    if (isAuth) {
      console.log('isAuth', isAuth);
    }
  }, [loginTriggered, user, token, isAuth]);

  const handleLogin = async (email, password) => {
    dispatch(
      login({
        email,
        password,
      })
    );
    setLoginTriggered(true);
  };

  const handleRegister = async () => {
    const email = 'test2566@test.com'; // Replace with new user's email after each try
    const password = 'password12345'; // Replace with new user's password after each try

    // Dispatch the register action
    await dispatch(
      register({
        name: 'TEST',
        email,
        password,
      })
    );
    setRegisterTriggered(true);

    // After successful registration, automatically log in the user
    if (registerTriggered && !isAuth) {
      handleLogin(email, password); // Use the email and password from the registration data
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
