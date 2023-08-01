import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import Navigation from 'components/Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FlexWrapper, AsideContainer } from './AsideBar.styled';

const AsideMenu = () => {
  const location = useLocation();
  const isCurrency = location.pathname === '/currency';
  const isHome = location.pathname === '/home' || location.pathname === '/';

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
