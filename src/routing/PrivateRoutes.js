import React from "react";
import { useSelector } from "react-redux";
import Login from "./../pages/auth/login/Login";
const PrivateRoutes = (props) => {
  const { Component } = props;
  const isUserAuthenticated = useSelector(
    (store) => store.authReducer.isUserAuthenticated
  );
  if (!isUserAuthenticated) return <Login />;
  return <Component />;
};

export default PrivateRoutes;
