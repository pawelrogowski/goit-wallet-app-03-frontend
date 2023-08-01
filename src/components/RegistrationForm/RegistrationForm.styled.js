import { Form } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  height: 100vh;
  min-width: 320px;
  width: 100%;
  @media screen and (min-height: 767px) {
    padding: 107px 20px 36px 20px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-light);
  border-radius: 12px;

  & > :first-child {
    margin-bottom: 30px;
  }

  & > :nth-child(6) {
    margin-bottom: 40px;
  }

  & > :nth-child(4) .error {
    top: 47px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 40rem #ffff inset;
    box-shadow: 0 0 0px 40rem #ffff inset;
  }

  //tablet+desktop
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    @media screen and (min-height: 767px) {
      width: 533px;
      padding: 40px 58.5px 62px 65px;
      height: auto;
    }
  }
`;
