import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setIsModalLogoutOpen } from 'redux/slices/globalSlice';
import { logout } from 'redux/slices/sessionSlice';
import {
  ModalGeneral,
  ModalContainer,
  ButtonContainer,
  ButtonDecline,
  ButtonAccept,
  ModalText,
} from './ModalLogout.styled';

const ModalLogout = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setIsModalLogoutOpen(false));
  };

  const handleLogout = async () => {
    try {
      dispatch(setIsModalLogoutOpen(false));
      await dispatch(logout());
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalGeneral onClick={handleOutsideClick}>
      <ModalContainer>
        <ModalText>Are you sure you want to leave?</ModalText>
        <ButtonContainer>
          <ButtonDecline onClick={handleCloseModal}>No</ButtonDecline>
          <ButtonAccept onClick={handleLogout}>Yes</ButtonAccept>
        </ButtonContainer>
      </ModalContainer>
    </ModalGeneral>
  );
};

export default ModalLogout;
