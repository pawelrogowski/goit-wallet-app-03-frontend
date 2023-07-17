import React from 'react';
import styled from 'styled-components';

import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons';
import { InputWithIcon } from 'components/Inputs/InputWithIcon';
import { Icon } from 'components/Icon/Icon';
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

  // this applies to svg inside Form
  svg {
    margin-bottom: 50px; // this is just a guess before I have typograpy
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
      <Icon icon="icon__logo" width="50" height="50" />
      <InputWithIcon icon="icon__baseline-email" placeholder="Email" />
      <InputWithIcon icon="icon__baseline-lock" placeholder="Password" />
      <PrimaryButton type="button">LOG IN</PrimaryButton>
      <SecondaryButton type="button">REGISTER</SecondaryButton>
    </Form>
  );
};

export default LoginForm;
