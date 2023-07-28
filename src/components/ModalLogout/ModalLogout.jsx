import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { PrimaryButton, SecondaryButton } from 'components/Buttons/Buttons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/slices/sessionSlice';
import { setIsModalLogoutOpen } from 'redux/slices/globalSlice';

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
  z-index: 100;
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
  min-width: 420px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 40vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalLogout = () => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const isModalLogoutOpen = useSelector(state => state.global.isModalLogoutOpen);

  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        dispatch(setIsModalLogoutOpen(false)); 
      }
    };

    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch(setIsModalLogoutOpen(false));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
        pending: 'Logging out...',
        success: 'You have logged out',
        error: 'Logout error',
      });
      dispatch(logout());
      dispatch(setIsModalLogoutOpen(false));
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div>
      {isModalLogoutOpen && (
        <ModalGeneral>
          <ModalContainer ref={modalRef}>
            <p>Are you sure you want to leave this page?</p>
            <ButtonContainer>
              <ButtonDecline onClick={() => dispatch(setIsModalLogoutOpen(false))}>
                No
              </ButtonDecline>
              <ButtonAccept onClick={handleLogout}>Yes</ButtonAccept>
            </ButtonContainer>
          </ModalContainer>
        </ModalGeneral>
      )}
    </div>
  );
};

export default ModalLogout;
