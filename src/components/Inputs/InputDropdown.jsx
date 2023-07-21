import React, { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import Select from 'react-dropdown-select';
import { Icon } from 'components/Icon/Icon';

const StyledSelect = styled(Select)`
  border-radius: 30px;
  border: 1px solid var(--font-color-dark);
  transition: all 0.3s ease-out;
  margin-bottom: 20px;

  .react-dropdown-select-input {
    font-size: 16px;
    ::placeholder {
      color: var(--font-color-dark);
    }
  }

  .react-dropdown-select-content {
    padding: 14px 0px 14px 20px;
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
    :hover {
      background-color: var(--background-light);
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    color: var(--font-color-dark);
    background-color: var(--background-primary);
  }
  .react-dropdown-select-dropdown {
    height: 182px;
    border-radius: 20px;

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
  .react-dropdown-select-dropdown-handle {
    width: auto;
    padding-right: 20px;
  }
`;

const InputDropdown = ({ options, title }) => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const [open, setOpen] = useState(null);

  return (
    <StyledSelect
      placeholder={title}
      options={options}
      values={[]}
      isOpen={open}
      dropdownGap={-2}
      keepSelectedInList={true}
      dropdownHandleRenderer={({ state }) => (
        <span>
          {state.dropdown ? <Icon icon="icon__arrow-down" /> : <Icon icon="icon__arrow-up" />}
        </span>
      )}
      onDropdownCloseRequest={({ close }) => {
        setOpen(true);
        sleep(300).then(() => {
          close();
          setOpen(false);
        });
      }}
    />
  );
};

const hide = keyframes`
  from {
    transition: height 310ms ease;
  }

  to {
    transition: height 310ms ease;
    height: 0;
    opacity: 0;
  }
`;

const show = keyframes`
  from {
    transition: height 310ms ease;
    height: 0;
    opacity: 0;
  }

  to {
    transition: height 310ms ease;
  }
`;

InputDropdown.propTypes = {};

export default InputDropdown;
