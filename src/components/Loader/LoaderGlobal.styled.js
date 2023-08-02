import { styled } from 'styled-components';
export const Loader = styled.div`
  width: 100px;
  height: 100px;
  border: 8px solid var(--color-brand-secondary);
  border-bottom-color: var(--color-brand-primary);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const ContainerLoader = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  /* backdrop-filter: blur(3px); */
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
