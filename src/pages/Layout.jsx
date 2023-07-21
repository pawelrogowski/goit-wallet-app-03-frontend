import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
