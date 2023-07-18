import React from 'react';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';
const Form = styled.form`
  min-width: 320px;
  width: 100vw;
  padding: 107px 20px 36px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-light);
  border-radius: 12px;

  // Logo is the first component so this adds margin to logo
  & > :first-child {
    margin-bottom: 60px;
  }

  //tablet+desktop
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
  }
`;

const LoginForm = () => {
  return (
    <Form>
      <Logo />
      <InputWithIcon icon="icon__baseline-email" placeholder="E-mail" />
      <InputWithIcon icon="icon__baseline-lock" placeholder="Password" />
      <PrimaryButton type="button">LOG IN</PrimaryButton>
      <SecondaryButton type="button">REGISTER</SecondaryButton>
    </Form>
  );
};

export default LoginForm;
