import styled from 'styled-components';

export const BaseButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 20px;
  border: none;
  letter-spacing: 1.8px;
  padding-left: 8px;

  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: var(--font-color-light);
  line-height: 1;
  transition: background-color 150ms;

  &:hover {
    background-color: var(--color-brand-primary);
    transition: background-color 150ms;
    cursor: pointer;
  }
  &:focus {
    background-color: var(--color-brand-primary);
    transition: background-color 150ms;
    outline: none;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:disabled {
    background-color: var(--color-logout-button);
    cursor: auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 300px;
  }
  &:active {
    transform: scale(0.99);
    transition: transform 50ms;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-brand-secondary);
  border: none;
  color: var(--font-color-light);
  min-height: 50px;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid var(--color-brand-primary);
  color: var(--color-brand-primary);

  &:hover,
  &:focus {
    color: var(--font-color-light);
  }
`;

export const DeleteButton = styled(PrimaryButton)`
  display: inline-block;
  width: 67px;
  height: 26px;
  color: var(--background-light);
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1;
  padding: 0;
  min-height: 26px;
  margin-bottom: 0px;

  &:not(:last-of-type) {
    margin-bottom: 0px;
  }
`;
