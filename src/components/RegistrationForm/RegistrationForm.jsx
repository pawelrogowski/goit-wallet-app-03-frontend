import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';
import { Formik, Form } from 'formik';
import { object, string, ref } from 'yup';
import PasswordStrength from './../Inputs/PasswordStrength';
import Loader from 'components/Loader/Loader';

const FormikForm = styled(Form)`
  height: 100vh;
  min-width: 320px;
  width: 100%;
  padding: 107px 20px 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-light);
  border-radius: 12px;

  // Logo is the first component so this adds margin to logo
  & > :first-child {
    margin-bottom: 30px;
  }

  & > :nth-child(6) {
    margin-bottom: 40px;
  }

  //tablet+desktop
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
    height: auto;
  }
`;

const getCharacterValidationError = str => {
  return `Password must have at least 1 ${str} character.`;
};

const RegistrationForm = () => {
  return (
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
        console.log(values);
        resetForm();
        setSubmitting(false);
      }}
      validateOnMount
    >
      {({ values, isValid, isSubmitting }) => (
        <FormikForm autoComplete="off">
          {isSubmitting && <Loader />}
          <Logo />
          <InputWithIcon
            icon="icon__baseline-email"
            placeholder="E-mail"
            title="Plase fill out your e-mail"
            name="email"
            type="email"
            autoComplete="off"
          />
          <InputWithIcon
            icon="icon__baseline-lock"
            placeholder="Password"
            title="The password must have at least 6 and max 12 characters"
            name="password"
            type="password"
            autoComplete="off"
          />
          <InputWithIcon
            icon="icon__baseline-lock"
            placeholder="Confirm password"
            title="The confirm password must match your password"
            name="confirmPassword"
            type="password"
            autoComplete="off"
          />
          <PasswordStrength value={values.password} />
          <InputWithIcon
            icon="icon__baseline-account"
            placeholder="First name"
            title="Plase fill out your e-mail"
            name="firstName"
            type="text"
            autoComplete="off"
          />
          <PrimaryButton type="submit" disabled={!isValid}>
            REGISTER
          </PrimaryButton>
          <SecondaryButton type="button">LOG IN</SecondaryButton>
        </FormikForm>
      )}
    </Formik>
  );
};

export default RegistrationForm;
