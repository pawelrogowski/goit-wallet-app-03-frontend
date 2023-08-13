import { createGlobalStyle } from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import TopRightIcon from '../assets/icons/blob-2.svg';
import BottomLeftIcon from '../assets/icons/blob-1.svg';
import BottomLeftBigIcon from '../assets/icons/blob-3.svg';
import TopRightBigIcon from '../assets/icons/blob-4.svg';
export const GlobalStyles = createGlobalStyle`

nav {
    .active {
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
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background-accent);

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      position: fixed;
      width: 100vw;
      height: 100vh;
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
      @media (min-height: 820px) and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        &::after {
          content: url(${BottomLeftBigIcon});
          position: absolute;
          z-index: -1;
          bottom: -5px;
          left: 0px;
        }
        &::before {
          content: url(${TopRightBigIcon});
          position: absolute;
          z-index: -1;
          top: 0px;
          right: 0px;
        }
      }
    }
    .loader-header {
      position: absolute;
      bottom: -1px;
      left: 0;
      border-bottom: 1px solid rgba(74, 87, 226, 0.75);
      box-shadow: 0px 0 0 1px rgba(74, 86, 226, 0.75);
      height: 1px;
      z-index: 9999;
      overflow: hidden;
    }
    .modals {
      position: fixed;
      z-index: 999999;
      top: 0;
      left: 0;
    }
    .aside-container {
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      max-width: 462px;
      display: flex;
      flex-direction: column;
      padding: 14px 20px 0px 20px;

      @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
        flex-grow: 0;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        max-width: none;
        gap: 32px;
      }

      @media (min-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 32px 32px 0px 32px;
      }

      @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        border-right: 2px solid #e7e5f2;
        box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.6);
        padding: 38px 69px 20px 16px;
        gap: 32px;
        height: calc(100vh -1px);
        margin-top: 2px;
      }
    }
  }
`;
