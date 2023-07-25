import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import AsideBar from 'components/AsideBar/AsideBar';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  width: 100%;
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: calc(100vh - 80px);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 0 16px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  z-index: 1;
  padding-top: 32px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    gap: 32px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-left: 70px;
  }
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Section>
        <AsideBar />
        <MainContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </Section>
    </>
  );
};

export default Layout;
