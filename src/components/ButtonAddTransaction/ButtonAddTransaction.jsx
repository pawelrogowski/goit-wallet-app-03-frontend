import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import { useState } from 'react';

const StyledButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  transition: all 0.5s;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 1px solid var(--color-brand-secondary);
  box-shadow: 0 10px 20px var(--color-brand-secondary);
  &:hover {
    transform: scale(1.2);
  }
  & svg {
    width: 79px;
    height: 79px;
    position: absolute;
    top: 69%;
    left: 22px;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    fill: var(--color-brand-secondary);
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      position: absolute;
      right: 40px;
      bottom: 40px;
    }
  }
`;

export const ButtonAddTransaction = () => {
  const [isOpenModalAddTransaction, setIsOpenModalAddTransaction] = useState(false);
  const handleOpenModal = () => {
    setIsOpenModalAddTransaction(!isOpenModalAddTransaction);
  };

  return (
    <>
      <StyledButton onChange={handleOpenModal}>
        <Icon icon="icon__btn-plus" />
      </StyledButton>
    </>
  );
};
export default ButtonAddTransaction;
