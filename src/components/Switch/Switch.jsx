import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from 'components/Icon/Icon';

const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center;
`;

const SwitchText = styled.p`
  color: var(--color-switch-main);
  text-align: right;
  font-family: Circe;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  align-items: center;

  &:first-of-type {
    color: ${({ isChecked }) =>
      isChecked ? 'var(--color-brand-secondary)' : 'var(--color-switch-main)'};
  }

  &:last-of-type {
    color: ${({ isChecked }) =>
      isChecked ? 'var(--color-switch-main)' : 'var(--color-brand-accent)'};
  }
`;

const SwitchSlider = styled.label`
  display: block;
  width: 80px;
  height: 40px;
  border-radius: 30px;
  border: 1px solid var(--color-switch-main);
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50%;
    left: ${({ isChecked }) => (isChecked ? '20%' : '80%')};
    transform: translate(-50%, -50%);
    border-radius: 100%;
    transition: all 0.5s;
    box-shadow: 0 10px 20px
      ${({ isChecked }) =>
        isChecked ? 'var(--color-brand-secondary)' : 'var(--color-brand-accent)'};
  }

  & svg {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 70%;
    left: ${({ isChecked }) => (isChecked ? '20%' : '80%')};
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    fill: var(--color-brand-secondary);
    z-index: 1000;

    &:first-of-type {
      opacity: ${({ isChecked }) => (isChecked ? '1' : '0')};
      fill: var(--color-brand-secondary);
    }

    &:last-of-type {
      opacity: 0;
      opacity: ${({ isChecked }) => (isChecked ? '0' : '1')};
      fill: var(--color-brand-accent);
    }
  }
`;

const SwitchCheckbox = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <StyledSwitch isChecked={isChecked}>
      <SwitchText isChecked={isChecked}>Income</SwitchText>
      <SwitchSlider isChecked={isChecked}>
        <SwitchCheckbox type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <Icon icon="icon__btn-plus" isChecked={isChecked} />
        <Icon icon="icon__btn-minus" isChecked={isChecked} />
      </SwitchSlider>
      <SwitchText isChecked={isChecked}>Expense</SwitchText>
    </StyledSwitch>
  );
};

export default Switch;
