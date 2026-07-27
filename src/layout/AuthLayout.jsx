import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/common/Footer";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="h-[80%] p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
