import React, { useEffect } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';
import { Formik } from 'formik';
import { object, string, ref } from 'yup';
import PasswordStrength from './../Inputs/PasswordStrength';
import { getCharacterValidationError } from 'utils/formaters';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/slices/sessionSlice';
import { FormikForm } from './RegistrationForm.styled';
import { motion } from 'framer-motion';
const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.session.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  const handleRegister = values => {
    dispatch(
      register({
        name: values.firstName,
        email: values.email,
        password: values.password,
      })
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.08, 0.82, 0.17, 1] }}
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
        }}
        validationSchema={object({
          email: string().email('Invalid email address.').required('Please provide your email.'),
          password: string()
            .required('No password provided.')
            .min(6, 'Password is too short - should be 6 chars minimum.')
            .max(12, 'Password is too long - should be 12 chars maximum.')
            .matches(/[0-9]/, getCharacterValidationError('digit'))
            .matches(/[a-z]/, getCharacterValidationError('lowercase'))
            .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
            .matches(/[^\w]/, getCharacterValidationError('special')),
          confirmPassword: string()
            .required('Please re-type your password.')
            .oneOf([ref('password')], 'Passwords do not match.'),
          firstName: string()
            .required('Please provide your name')
            .max(30, 'First name is too long - should be 30 characters or less.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleRegister(values);
          resetForm();
          setSubmitting(false);
        }}
        validateOnMount
      >
        {({ values, handleBlur }) => (
          <FormikForm autoComplete="off">
            <Logo />
            <InputWithIcon
              icon="icon__baseline-email"
              placeholder="E-mail"
              title="Plase fill out your e-mail"
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
            <InputWithIcon
              icon="icon__baseline-lock"
              placeholder="Confirm password"
              title="The confirm password must match your password"
              name="confirmPassword"
              type="password"
              autoComplete="off"
              onKeyUp={handleBlur}
            />
            <PasswordStrength value={values.password} />
            <InputWithIcon
              icon="icon__baseline-account"
              placeholder="First name"
              title="Plase fill out your e-mail"
              name="firstName"
              type="text"
              autoComplete="off"
              onKeyUp={handleBlur}
            />
            <PrimaryButton type="submit">REGISTER</PrimaryButton>
            <SecondaryButton type="button" onClick={() => navigate('/login')}>
              LOG IN
            </SecondaryButton>
          </FormikForm>
        )}
      </Formik>
    </motion.div>
  );
};

export default RegistrationForm;
