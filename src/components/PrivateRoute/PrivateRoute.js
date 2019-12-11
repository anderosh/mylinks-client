import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const isLogIn = localStorage.getItem('token');

  if (!isLogIn) return <Redirect to="/login" />;
  return <Route {...props} />;
};

export default PrivateRoute;
