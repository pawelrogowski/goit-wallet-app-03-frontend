import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import AsideBar from 'components/AsideBar/AsideBar';
import { Container } from 'components/Container/Container.styled';
import { Background, MainContainer, Section } from './Layout.styled';

const Layout = () => {
  return (
    <Background>
      <Header />
      <Container>
        <Section>
          <AsideBar />
          <MainContainer>
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
