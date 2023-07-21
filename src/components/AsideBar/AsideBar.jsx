import styled from 'styled-components';

import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';

const AsideContainer = styled.aside`
  margin-top: 12px;
  margin-bottom: 12px;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  & > :first-child {
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-top: 40px;
      margin-bottom: 28px;
    }
  }
  & > :nth-last-child(-n + 2) {
    display: none;
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      display: block;
    }
  }
`;

const AsideMenu = () => {
  return (
    <AsideContainer>
      <Navigation />
      <Balance />
      <Currency />
    </AsideContainer>
  );
};

export default AsideMenu;
