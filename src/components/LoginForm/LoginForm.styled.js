import { Form } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  height: 100vh;
  min-width: 320px;
  width: 100%;
  @media screen and (min-height: 767px) {
    padding: 107px 20px 36px 20px;
  }
  padding: 20px 20px 36px 20px;
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 40rem #ffff inset;
    box-shadow: 0 0 0px 40rem #ffff inset;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    @media screen and (min-height: 767px) {
      width: 533px;
      padding: 40px 58.5px 62px 65px;
      height: auto;
    }
  }
`;
