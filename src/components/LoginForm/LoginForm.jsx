import React from 'react';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import Loader from './../Loader/Loader';

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

  & > :first-child {
    margin-bottom: 30px;
  }

  & > :nth-last-child(2) {
    margin-top: 40px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
    height: auto;
  }
`;

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={object({
        email: string().email('Invalid email address.').required('Please provide your email.'),
        password: string().required('No password provided.'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        resetForm();
        setSubmitting(false);
      }}
      validateOnMount
    >
      {({ isValid, isSubmitting }) => (
        <FormikForm autoComplete="off">
          <Logo />
          {isSubmitting && <Loader />}
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
          <PrimaryButton type="submit" disabled={!isValid}>
            LOG IN
          </PrimaryButton>
          <SecondaryButton type="button">REGISTER</SecondaryButton>
        </FormikForm>
      )}
    </Formik>
  );
};

export default LoginForm;
