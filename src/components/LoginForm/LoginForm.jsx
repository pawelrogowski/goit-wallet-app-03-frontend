import React from 'react';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';

const Form = styled.form`
  max-width: 533px;
  min-width: 320px;
  padding: 107px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #bdbdbd;
  padding-left: 36px;
  margin-bottom: 40px;
  &:focus {
    outline: none;
  }
`;

const LoginForm = () => {
  return (
    <Form>
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Password" />

      <PrimaryButton type="button">LOG IN</PrimaryButton>
      <SecondaryButton type="button">REGISTER</SecondaryButton>
    </Form>
  );
};

export default LoginForm;
