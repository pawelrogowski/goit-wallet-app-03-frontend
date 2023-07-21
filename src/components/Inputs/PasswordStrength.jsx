import styled from 'styled-components';
import { passwordStrength } from 'check-password-strength';

const StrengthBar = styled.progress`
  width: 100%;
  border-radius: 20px;
  height: 4px;

  &::-webkit-progress-bar {
    background-color: var(--background-progress-bar);
    border-radius: 7px;
  }
  &::-webkit-progress-value {
    background-color: var(--color-brand-secondary);
    border-radius: 7px;
    box-shadow: 0px 1px 6px 0.1px var(--color-brand-secondary);
  }
  &::-moz-progress-bar {
    background-color: var(--background-progress-bar);
    border-radius: 7px;
  }

  &::-moz-progress-value {
    background-color: var(--color-brand-secondary);
    border-radius: 7px;
    box-shadow: 0px 1px 6px 0.1px var(--color-brand-secondary);
  }
`;

const PasswordStrength = props => {
  const strength = passwordStrength(props.value, [
    {
      id: 0,
      value: 'Tooweak',
      minDiversity: 0,
      minLength: 0,
    },
    {
      id: 1,
      value: 'Weak',
      minDiversity: 2,
      minLength: 6,
    },
    {
      id: 2,
      value: 'Medium',
      minDiversity: 3,
      minLength: 8,
    },
    {
      id: 3,
      value: 'Strong',
      minDiversity: 4,
      minLength: 12,
    },
  ]).value;

  let progress;

  if (strength === 'Tooweak') {
    progress = 25;
  } else if (strength === 'Weak') {
    progress = 50;
  } else if (strength === 'Medium') {
    progress = 75;
  } else {
    progress = 100;
  }

  return <StrengthBar value={progress} max="100" />;
};

export default PasswordStrength;
