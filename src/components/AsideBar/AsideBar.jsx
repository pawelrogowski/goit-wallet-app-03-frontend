import styled from 'styled-components';

import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';

const AsideContainer = styled.aside`
  margin-top: 40px;
  margin-bottom: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    margin-top: 12px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    height: auto;
    justify-content: center;
    max-width: none;
    align-items: flex-start;
  }
`;

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    align-items: center;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-right: 20px;
  }
`;

const AsideMenu = () => {
  return (
    <AsideContainer>
      <FlexWrapper>
        <Navigation />
        <Balance />
      </FlexWrapper>
      <Currency />
    </AsideContainer>
  );
};

export default AsideMenu;
