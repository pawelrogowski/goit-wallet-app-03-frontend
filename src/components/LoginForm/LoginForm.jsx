import React, { useEffect, useRef } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';
import { Formik } from 'formik';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/slices/sessionSlice';
import { FormikForm } from './LoginForm.styled';
import { motion, AnimatePresence } from 'framer-motion';
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.session.isAuth);
  const loginButtonRef = useRef(null);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  const handleLogin = values => {
    dispatch(login({ email: values.email, password: values.password }));
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await handleLogin(values);
      loginButtonRef.current.focus();
    } catch (error) {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.08, 0.82, 0.17, 1] }}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={object({
            email: string().email('Invalid email address.').required('Please provide your email.'),
            password: string().required('No password provided.'),
          })}
          onSubmit={handleSubmit}
          validateOnMount
        >
          {({ handleBlur }) => (
            <FormikForm autoComplete="off">
              <Logo />
              <InputWithIcon
                icon="icon__baseline-email"
                placeholder="E-mail"
                title="Please fill out your e-mail"
                name="email"
                type="email"
                autoComplete="off"
                onKeyUp={handleBlur}
              />
              <InputWithIcon
                icon="icon__baseline-lock"
                placeholder="Password"
                title="The password must have at least 6 and max 12 characters"
                name="password"
                type="password"
                autoComplete="off"
                onKeyUp={handleBlur}
              />
              <PrimaryButton type="submit" ref={loginButtonRef}>
                LOG IN
              </PrimaryButton>
              <SecondaryButton type="button" onClick={() => navigate('/register')}>
                REGISTER
              </SecondaryButton>
            </FormikForm>
          )}
        </Formik>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginForm;
