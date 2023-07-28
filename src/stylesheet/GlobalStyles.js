import { createGlobalStyle } from 'styled-components';
import { Icon } from 'components/Icon/Icon';
export const GlobalStyles = createGlobalStyle`


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

`;
