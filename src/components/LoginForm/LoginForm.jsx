import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';

const Form = styled.form`
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
    margin-bottom: 60px;
  }

  //tablet+desktop
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();

    const formData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    console.log('Form Data:', formData);
    console.log('React email state:', email);
    console.log('React password state:', password);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Logo />
      <InputWithIcon
        icon="icon__baseline-email"
        placeholder="E-mail"
        name="email"
        value=""
        onChange={handleEmailChange}
      />
      <InputWithIcon
        icon="icon__baseline-lock"
        placeholder="Password"
        name="password"
        type="password"
        value=""
        onChange={handlePasswordChange}
      />
      <PrimaryButton type="submit">LOG IN</PrimaryButton>
      <SecondaryButton type="button">REGISTER</SecondaryButton>
      {/* not sure yet how to implement routing on SecondaryButton */}
    </Form>
  );
};

export default LoginForm;
