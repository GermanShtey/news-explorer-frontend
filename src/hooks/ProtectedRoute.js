import React, { useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {
    isLogin,
    path,
    children,
    openPopupLogin,
    ...rest
  } = props;

  const { pathname } = useLocation();

  useEffect(() => {
    if(!isLogin && pathname === '/saved-news') openPopupLogin();
  }, [isLogin]);

  return isLogin
    ? <Route path={path} { ...rest }>{children}</Route>
    : <Redirect to="/"/>
};

export default ProtectedRoute;
