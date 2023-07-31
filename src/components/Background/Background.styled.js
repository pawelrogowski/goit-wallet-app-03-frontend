import TopRightIcon from '../../assets/icons/blob-2.svg';
import BottomLeftIcon from '../../assets/icons/blob-1.svg';
import styled from 'styled-components';
export const Background = styled.div`
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
  }
`;
