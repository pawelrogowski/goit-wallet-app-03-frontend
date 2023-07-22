import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from 'components/Buttons/Buttons';
import Morpheus from './morfi.png'

const ModalGeneral = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  }
`;

const ModalContainer = styled.div`
  backgroundcolor: white;
  width: 600px;
  height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallButtonRed = styled(PrimaryButton)`
  width: 67px;
  height: 26px;
  font-size: 14px;
  letter-spacing: normal;
  padding: 0;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const SmallButtonBlue = styled(PrimaryButton)`
  width: 67px;
  height: 26px;
  font-size: 14px;
  letter-spacing: normal;
  padding: 0;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Picture = styled.img`
//
`;

const ModalLogout = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div>
      <ModalGeneral isModalOpen={true}>
        <ModalContainer ref={modalRef}>
          <p>Czy na pewno chcesz wyjść?</p>
          <ButtonContainer>
            <SmallButtonBlue onClick={onClose}>Nie</SmallButtonBlue>
            <SmallButtonRed>Tak</SmallButtonRed>
          </ButtonContainer>
          <Picture src={Morpheus} alt='Morpheus'/>
        </ModalContainer>
      </ModalGeneral>
    </div>
  );
};

export default ModalLogout;
