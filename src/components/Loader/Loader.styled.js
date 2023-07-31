import styled from 'styled-components';

const Loader = styled.span`
  position: relative;
  width: 100px;
  height: 16px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #24cca7;
    box-shadow: 32px 0 #24cca7;
    left: 0;
    top: 0;
    animation: ballMoveX 2s linear infinite;
  }

  &::after {
    box-shadow: none;
    transform: translateX(64px) scale(1);
    z-index: 2;
    animation: trfLoader 2s linear infinite;
  }

  @keyframes trfLoader {
    0%,
    5% {
      transform: translateX(64px) scale(1);
      background: #c5baff;
    }
    10% {
      transform: translateX(64px) scale(1);
      background: #c5baff;
    }
    40% {
      transform: translateX(32px) scale(1.5);
      background: #c5baff;
    }
    90%,
    95% {
      transform: translateX(0px) scale(1);
      background: #c5baff;
    }
    100% {
      transform: translateX(0px) scale(1);
      background: #c5baff;
    }
  }

  @keyframes ballMoveX {
    0%,
    10% {
      transform: translateX(0);
      background: #c5baff;
    }
    90%,
    100% {
      transform: translateX(32px);
      background: #24cca7;
    }
  }
`;

export default Loader;
