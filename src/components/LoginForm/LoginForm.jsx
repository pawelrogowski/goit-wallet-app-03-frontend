import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import Logo from 'components/Logo/Logo';

const Form = styled.form`
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
    margin-bottom: 60px;
  }

  //tablet+desktop
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 533px;
    padding: 40px 58.5px 62px 65px;
    height: auto;
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
        title="Plase fill out your e-mail"
        required
        name="email"
        value=""
        onChange={handleEmailChange}
      />
      <InputWithIcon
        icon="icon__baseline-lock"
        placeholder="Password"
        title="The password must have at least 6 and max 12 characters"
        required
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

// Wykonanie walidacji pola formularza, wykorzystywać: 1) bibliotekę formik i yup lub 2) indicative. Hasło i e-mail są polami wymaganymi
// e-mail jest sprawdzany pod kątem prawidłowości, hasło ma 6 lub więcej, do 12 znaków włącznie
// Klasowy lub komponent hook, który przechowuje w swoim stanie stany wejść.
// Napisz operację dla logowania, powinna być wywoływana na przesłanie formularza
// Jeśli odpowiedź z serwera jest udana, w odpowiedź otrzymasz token i obiekt użytkownika. Zapisz token i obiekt użytkownika w redux store, a także zmień klucz w session.isAuth na true
// Jeśli w odpowiedź z serwera przychodzi błąd, trzeba go zdefiniować w redux store session.error i przewidzieć wyświetlenie tego błędu
// Link "Rejestracja" to komponent Link z react-router-dom i przejście do "/register"
