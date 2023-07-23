import styled from 'styled-components';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';

const AsideContainer = styled.aside`
  margin: 0;
  margin-bottom: 12px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    flex-grow: 0;
    flex-direction: row;
    width: 100%;
    padding: 0px;
    height: auto;
    justify-content: center;
    max-width: none;
  }
`;

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  justify-content: space-between;
  height: calc(100% - 40px);
  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    align-items: center;
    margin-top: 15px;
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-right: 32px;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    height: auto;
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
