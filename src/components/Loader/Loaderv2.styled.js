import { Icon } from 'components/Icon/Icon';
import styled from 'styled-components';

export const LoaderBox = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: stretch;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const IconLoader = styled(Icon)`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 48px;
    height: 48px;
  }
`;
export const Loader = styled.span`
  font-size: 40px;
  display: inline-block;
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: 700;
  color: var(--font-color-light);
  box-sizing: border-box;
  text-shadow: 0 0 2px var(--font-color-dark), 0 0 1px var(--font-color-dark),
    0 0 1px var(--font-color-dark);
  letter-spacing: 2px;
  position: relative;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 48px;
  }
  &::after {
    content: 'WalletAPP';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--font-color-dark);
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    animation: animloader 1s linear 1;
  }

  @keyframes animloader {
    0% {
      width: 0%;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 100%;
    }
  }
`;
