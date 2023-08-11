import styled from 'styled-components';

export const StyledButton = styled.button`
  position: sticky;

  align-self: flex-end;
  z-index: 99;
  right: 54px;
  bottom: 40px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.5s;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border-style: none;
  box-shadow: 0px 3px 10px rgba(36, 204, 167, 0.8);
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }

  & svg {
    width: 79px;
    height: 79px;
    position: absolute;
    top: 67%;
    left: 22px;
    transform: translate(-50%, -50%);
    fill: var(--color-brand-secondary);
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: absolute;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: absolute;
    bottom: 45px;
    right: 40px;
  }
`;
