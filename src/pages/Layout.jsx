import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import AsideBar from 'components/AsideBar/AsideBar';
import DiagramTable from 'components/DiagramTable/DiagramTable';

const Section = styled.section`
  display: flex;
  position: static;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  width: 100%;
  height: 100%;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: fixed;
    flex-direction: row;
    padding: 0 16px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  flex-wrap: wrap;
  z-index: 1;
  margin-top: 32px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
  & > :nth-child(1n + 1) {
    margin-bottom: 32px;
    margin-top: 0;

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 10px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 70px;
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
