import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';
import { SecondaryButton } from '../Buttons/Buttons';
import { BaseInput } from 'components/Inputs/BaseInput.styled';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  left: 0;
  background-color: var(--background-overlay-modal);
  transition: opacity 500ms ease-in-out, visibility 500ms ease-in-out;
  opacity: 1;
  visibility: visible;
  z-index: 1000;

  .category {
    top: 33px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const Modal = styled.div`
  min-width: 540px;
  padding: 40px 73px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-light);
  border-radius: 12px;
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
    padding: 20px;
    min-width: 300px;
  }
`;

export const Heading = styled.h3`
  color: var(--font-color-dark);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  margin: 0;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  & svg {
    stroke: var(--font-color-dark);
    width: 20px;
    height: 20px;
    position: relative;
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    & svg {
      display: none;
    }
  }
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
`;

export const CancelButton = styled(SecondaryButton)`
  margin-bottom: 0;
  margin-top: -40px;
`;

export const TwoColumnRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 46px;
  max-width: 410px;

  input {
    width: 181px;
  }

  & > :first-child input {
    font-family: Circe;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3px;
    outline: none;

    @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
      text-align: left;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    flex-direction: column;
    max-width: 100%;
    width: 100%;

    input {
      width: 100%;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;

  ${BaseInput} {
    @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
      padding-left: 20px;
      text-align: left;
    }
  }
`;

export const CalendarWrapper = styled.div`
  position: relative;
  margin-top: 2px;

  svg {
    position: absolute;
    bottom: 8px;
    right: 14px;
    width: 24px;
    height: 24px;
    fill: var(--color-brand-primary);
  }

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    svg {
      right: 17px;
      bottom: 4px;
    }
  }
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  top: 28px;
  left: 0px;
  font-size: 13px;
  color: var(--color-brand-accent);
`;
