import React from "react";
import {Outlet} from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-screen h-screen">
      <div className="h-[80%] p-4">
        <Outlet />
      </div>
      <footer className=" ">footer</footer>
    </div>
  );
};

export default AuthLayout;
