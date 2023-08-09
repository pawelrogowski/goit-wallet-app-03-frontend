import { styled } from 'styled-components';
export const Loader = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  top: 0;
  right: 32px;

  &:before,
  &:after {
    content: '';
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2) inset;
  }
  &:after {
    width: 22px;
    height: 22px;
    box-shadow: 0 2px 0 var(--color-brand-secondary) inset;
    animation: rotate 0.65s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
