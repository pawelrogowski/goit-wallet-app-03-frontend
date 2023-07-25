import styled from 'styled-components';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AsideContainer = styled.aside`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 462px;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #E7E5F2;
  box-shadow: box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.6);
  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    flex-grow: 0;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: center;
    max-width: none;
    gap: 32px;
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
  @media (min-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    height: auto;
    gap: 28px;
  }
`;

const AsideMenu = () => {
  const location = useLocation();
  const isCurrency = location.pathname === '/currency';
  const isHome = location.pathname === '/home';

  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <AsideContainer>
      <FlexWrapper>
        <Navigation />
        {windowWidth || isHome ? <Balance /> : ''}
      </FlexWrapper>
      {isCurrency ? '' : <Currency />}
    </AsideContainer>
  );
};

export default AsideMenu;
