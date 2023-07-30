import { createGlobalStyle } from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import TopRightIcon from '../assets/icons/blob-2.svg';
import BottomLeftIcon from '../assets/icons/blob-1.svg';
export const GlobalStyles = createGlobalStyle`

  nav {
    .active{
        ${Icon} {
          fill: var(--nav-color-active);
          transition: fill 150ms, box-shadow 150ms;
          box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
        }
        span {
          color: var(--font-color-dark);
          font-size: 18px;
          font-weight: 700;
          font-style: normal;
          &:hover {
            color: var(--nav-color-active);
          }
        }
      }
    }
  .Toastify__toast {
    border-radius: 12px;
    background-color: var(--background-light);
    font-family: Circe;
  }
  body {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--background-accent);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::before {
      content: url(${TopRightIcon});
      position: absolute;
      z-index: -1;
      top: 0px;
      right: 0px;
    }

    &::after {
      content: url(${BottomLeftIcon});
      position: absolute;
      z-index: -1;
      bottom: -5px;
      left: 0px;
    }
  }}
`;
