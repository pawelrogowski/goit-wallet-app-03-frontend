import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import Select from 'react-dropdown-select';

export const StyledSelect = styled(Select)`
  border-radius: 30px;
  border: 1px solid var(--font-color-dark);
  transition: all 0.3s ease-out;
  margin-bottom: 20px;
  height: 50px;

  .react-dropdown-select-input {
    overflow: hidden;
    font-size: 16px;

    ::placeholder {
      color: var(--font-color-dark);
    }
  }

  .react-dropdown-select-content {
    padding: 14px 36px 14px 20px;
    color: var(--font-color-dark);
    font-family: Circe;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .react-dropdown-select-item {
    color: var(--font-color-dark);
    font-family: 'Circe', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 4px 20px;
    border-bottom: none;
    border-top: none;
    :hover {
      background-color: var(--background-light);
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    color: var(--font-color-dark);
    background-color: var(--background-light);
  }
  .react-dropdown-select-dropdown {
    height: 182px;
    border-radius: 20px;
    background-color: #f1f1f1;
    box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.1);
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    ::-webkit-scrollbar {
      display: none;
    }
    ${({ isOpen }) =>
      isOpen
        ? css`
            animation: ${hide} 310ms ease-in-out;
          `
        : css`
            animation: ${show} 310ms ease-in-out;
          `};
  }

  .react-dropdown-select-option {
    transition: all 0.3s ease-out;
  }

  .react-dropdown-select {
    position: relative;
  }
  .react-dropdown-select-dropdown-handle {
    position: absolute;
    width: 20px;
    right: 20px;
  }
`;
export const hide = keyframes`
  from {
    transition: height 310ms ease;
  }

  to {
    transition: height 310ms ease;
    height: 0;
    opacity: 0;
  }
`;

export const show = keyframes`
  from {
    transition: height 310ms ease;
    height: 0;
    opacity: 0;
  }

  to {
    transition: height 310ms ease;
  }
`;
