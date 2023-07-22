import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Logo from 'components/Logo/Logo';
import ModalLogout from 'components/ModalLogout/ModalLogout';

const HeaderDiv = styled.header`
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: ${props => props.theme.background.light};
  padding: 15px 20px 15px 20px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 80px;
  }
`;

const LogoutDiv = styled.div`
  display: flex;
  gap: 4px;
  height: 30px;
  align-items: center;
  fill: ${props => props.theme.colors.logoutButton};
  font-size: 18px;
  font-weight: 400;

  svg {
    width: 18px;
    height: 18px;
    transition: fill 150ms;
  }

  .exitText {
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  .nameText {
    margin-right: -4px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-right: 0px;
    }
  }

  .exitButton {
    display: flex;
    cursor: pointer;
    transition: color 150ms;

    span {
      margin-left: 6px;
    }

    &:hover,
    &:focus {
      transition: color 150ms;
      color: var(--color-brand-primary);
      svg {
        transition: fill 150ms;
        fill: var(--color-brand-primary);
      }
    }
  }

  .divider {
    height: 30px;
    margin-right: 4px;
    border: 1px solid ${props => props.theme.colors.logoutButton};
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.logoutButton};
  }
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <HeaderDiv>
      <Logo></Logo>
      <LogoutDiv>
        <span className="nameText">
          <button type="button">Name</button>
        </span>
        <div className="divider"></div>
        <button type="button" className="exitButton" onClick={openModal}>
          <Icon icon="icon__exit"></Icon>
          <span className="exitText">Exit</span>
        </button>
        {isModalOpen && <ModalLogout onClose={closeModal} />}
      </LogoutDiv>
    </HeaderDiv>
  );
};

export default Header;
