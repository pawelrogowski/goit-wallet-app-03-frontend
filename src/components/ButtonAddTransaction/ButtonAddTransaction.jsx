import { Icon } from 'components/Icon/Icon';
import { useDispatch } from 'react-redux';
import React from 'react';
import { setIsModalAddTransactionOpen } from 'redux/slices/globalSlice';
import { StyledButton } from './ButtonAddTransaction.styled';
export const ButtonAddTransaction = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setIsModalAddTransactionOpen(true));
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <StyledButton onClick={handleOpenModal}>
        <Icon icon="icon__btn-plus" />
      </StyledButton>
    </>
  );
};
export default ButtonAddTransaction;
