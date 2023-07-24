import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from 'components/Buttons/Buttons';

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
  z-index: 1;
  & > div {
    padding: 20px;
    border-radius: 8px;
  }
`;

const ButtonDecline = styled(SecondaryButton)`
  width: 60px;
  height: 40px;
`;

const ButtonAccept = styled(PrimaryButton)`
  width: 60px;
  height: 40px;
`;

const ModalContainer = styled.div`
  background-color: var(--background-light);
  width: 420px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
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
      <ModalGeneral>
        <ModalContainer ref={modalRef}>
          <p>Are you sure you want to leave this page?</p>
          <ButtonContainer>
            <ButtonDecline onClick={onClose}>No</ButtonDecline>
            <ButtonAccept>Yes</ButtonAccept>
          </ButtonContainer>
        </ModalContainer>
      </ModalGeneral>
    </div>
  );
};

export default ModalLogout;
