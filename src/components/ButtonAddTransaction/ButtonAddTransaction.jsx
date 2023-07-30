import { Icon } from 'components/Icon/Icon';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/slices/globalSlice';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';
import { StyledButton } from './ButtonAddTransaction.styled';

export const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const isModalAddTransactionOpen = useSelector(state => state.global.isModalAddTransactionOpen);

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
      {isModalAddTransactionOpen && <AddTransactionModal />}
    </>
  );
};
export default ButtonAddTransaction;
