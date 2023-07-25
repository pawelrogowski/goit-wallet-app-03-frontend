import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import AsideBar from 'components/AsideBar/AsideBar';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  width: 100%;
  min-height: calc(100vh - 60px);

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: calc(100vh - 80px);
    height: calc(100vh - 80px);
    padding: 20px 20px 100px 20px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 16px 16px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  z-index: 1;
  padding-top: 46px;
  gap: 32px;
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
    padding-top: 20px;
    height: calc(100% - 400px);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-left: 70px;
    height: calc(100% - 90px);
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
