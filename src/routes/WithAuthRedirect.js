import LoaderV2 from 'components/Loader/Loaderv2';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = true; // to do wymiany na zapisany stan z reduxa
const WithAuthRedirect = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Symulacja ładowania
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // wyczyścić timer przy unmount
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoaderV2 />;
  }

  //auto redirect
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default WithAuthRedirect;
