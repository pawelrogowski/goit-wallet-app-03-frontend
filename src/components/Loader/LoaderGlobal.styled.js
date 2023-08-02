import { styled } from 'styled-components';
export const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
  }
  &::after {
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
  position: absolute;
  width: 100px;
  height: 100px;
  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
  }
  &::after {
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
  z-index: 100;
  /* position: fixed;
  top: 0; */
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
