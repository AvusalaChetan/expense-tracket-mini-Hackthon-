import React from "react";
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router";

const ProtectedRoute = () => {
  let currentUser = useSelector((state) => state.Auth.currentUser);

  return <div>{currentUser ? <Outlet /> : <Navigate to="/auth/login" />}</div>;
};

export default ProtectedRoute;
