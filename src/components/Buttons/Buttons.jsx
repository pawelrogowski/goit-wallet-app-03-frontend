import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 280px;
  max-width: 300px;
  height: 50px;
  border-radius: 20px;
  border: none;
  background-color: gray;
  letter-spacing: 1.8px;

  font-family: Circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #fff;
  transition: background-color 250ms;

  &:hover {
    background-color: ${props => props.theme.colors.brandPrimary};
    transition: background-color 250ms;
  }
  &:focus {
    background-color: ${props => props.theme.colors.brandPrimary};
    transition: background-color 250ms;
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.brandSecondary};
  border: none;
  color: #fff;
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.brandPrimary};
  color: ${props => props.theme.colors.brandPrimary};

  &:hover,
  &:focus {
    color: white;
  }
`;
