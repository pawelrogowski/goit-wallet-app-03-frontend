import { styled } from 'styled-components';
export const Loader = styled.div`
  z-index: 99999;
  position: relative;
  width: 200px;
  height: 200px;
  backdrop-filter: blur(25px);
  &::before,
  &::after {
    z-index: 99998;
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 00) inset;
  }
  &::after {
    z-index: 99998;
    box-shadow: 0 4px 0 var(--color-brand-primary) inset;
    animation: rotate 2s linear infinite;
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
export const LoaderInner = styled.div`
  z-index: 99999;
  position: absolute;
  width: 100px;
  height: 100px;
  &::before,
  &::after {
    z-index: 99998;
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 00) inset;
  }
  &::after {
    z-index: 99998;
    box-shadow: 0 4px 0 var(--color-brand-primary) inset;
    animation: rotate2 2s linear infinite;
  }

  @keyframes rotate2 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
export const ContainerLoader = styled.div`
  backdrop-filter: blur(25px);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
