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
  height: 100vh;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 0 16px;
  }
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-grow: 1;
  flex-wrap: wrap;

  & > :nth-child(1n + 1) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 10px;
    }
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 0px;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    & > :last-child {
      margin-top: -60px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-left: 70px;
    padding-left: 70px;
    border-left: 1px solid #dcdcdf;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    & > :last-child {
      margin-top: 0;
    }
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
