import styled from 'styled-components';

export const ModalGeneral = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 250ms, visibility 250ms;
  z-index: 100;
  & > div {
    padding: 20px;
    border-radius: 8px;
  }
`;

export const ButtonDecline = styled.button`
  width: 120px;
  height: 30px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border: none;
  background-color: var(--color-brand-secondary);
  color: #fff;
  transition: box-shadow 200ms;
  &:hover,
  &:focus {
    outline: none;
    transition: box-shadow 200ms;
    box-shadow: 0px 0px 15px 4px rgba(36, 204, 168, 0.75);
  }
  &:active {
    transition: transform 200ms;
    transform: scale(1.05);
  }
`;

export const ButtonAccept = styled.button`
  width: 120px;
  height: 30px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border: none;
  background-color: var(--color-brand-primary);
  color: #fff;
  transition: box-shadow 200ms, transform 200ms;
  &:hover,
  &:focus {
    outline: none;
    transition: box-shadow 200ms;
    box-shadow: 0px 0px 15px 4px rgba(74, 86, 226, 0.75);
  }
  &:active {
    transition: transform 200ms;
    transform: scale(1.05);
  }
`;

export const ModalText = styled.p`
  padding: 0;
  margin: 0px;
  margin-top: 6px;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-align: center;
`;

export const ModalContainer = styled.div`
  position: absolute;
  right: 50%;
  top: 70px;
  transform: translateX(50%);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 90px;
  }
  align-self: flex-start;
  box-shadow: 0px 0px 23px rgba(255, 255, 255, 0.8);
  background-color: var(--background-light);
  height: auto;
  display: flex;
  gap: 34px;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 280px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0px;
`;
