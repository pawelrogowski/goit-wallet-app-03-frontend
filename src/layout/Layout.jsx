import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import AsideBar from 'components/AsideBar/AsideBar';
import { Container } from 'components/Container/Container.styled';
import { Background, MainContainer, Section } from './Layout.styled';
import { useState, useEffect } from 'react';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';

const Layout = () => {
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
    <Background>
      <Header />
      <Container>
        <Section>
          <AsideBar />
          <MainContainer>
            {windowWidth && <ButtonAddTransaction />}
            <Suspense>
              <Outlet />
            </Suspense>
          </MainContainer>
        </Section>
      </Container>
    </Background>
  );
};

export default Layout;
