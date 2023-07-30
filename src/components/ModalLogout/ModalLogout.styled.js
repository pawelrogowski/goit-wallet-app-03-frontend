import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from 'components/Buttons/Buttons';
export const ModalGeneral = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 50px;
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  & > div {
    padding: 20px;
    border-radius: 8px;
  }
`;

export const ButtonDecline = styled(PrimaryButton)`
  width: 120px;
  height: 40px;
`;

export const ButtonAccept = styled(SecondaryButton)`
  width: 120px;
  height: 40px;
`;

export const ModalText = styled.p`
  padding: 0;
  margin: 0px;
  margin-top: 6px;
  font-family: Poppins;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
`;

export const ModalContainer = styled.div`
  align-self: flex-start;
  box-shadow: 0px 3px 10px rgba(255, 255, 255, 0.2);
  background-color: var(--background-light);
  width: 100vw;
  height: auto;
  display: flex;
  gap: 34px;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 420px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
`;
