import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import AsideBar from 'components/AsideBar/AsideBar';
import { Container } from 'components/Container/Container.styled';
import { Background, MainContainer, Section } from './Layout.styled';
import { useState, useEffect } from 'react';
import ButtonAddTransaction from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth > 767);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth > 767);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const headerVariants = {
    hidden: {
      y: '-100%',
    },
    visible: {
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <Background>
      <motion.header variants={headerVariants} initial="hidden" animate="visible">
        <Header />
      </motion.header>
      <Container>
        <Section>
          <AsideBar />

          <MainContainer>
            {windowWidth && location.pathname === '/home' && <ButtonAddTransaction />}
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
