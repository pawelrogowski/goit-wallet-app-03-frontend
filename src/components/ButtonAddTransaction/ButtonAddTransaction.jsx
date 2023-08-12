import { Icon } from 'components/Icon/Icon';
import { motion } from 'framer-motion';
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

  const btnVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <motion.div variants={btnVariants} initial="hidden" animate="visible">
        <StyledButton onClick={handleOpenModal}>
          <Icon icon="icon__btn-plus" />
        </StyledButton>
      </motion.div>
    </>
  );
};
export default ButtonAddTransaction;
