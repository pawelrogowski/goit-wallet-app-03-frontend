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
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 0 16px;
  }
`;
const Layout = () => {
  return (
    <>
      <Header />
      <Section>
        <AsideBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

export default Layout;
