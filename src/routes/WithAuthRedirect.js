import LoaderV2 from 'components/Loader/Loaderv2';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const WithAuthRedirect = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const isAuth = useSelector(state => state.session.isAuth);
  const isLoading = useSelector(state => state.session.isLoading);

  useEffect(() => {
    setRedirect(!isAuth);
  }, [isAuth]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <LoaderV2 />;
  }

  return children;
};

export default WithAuthRedirect;
