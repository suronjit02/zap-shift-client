import React from "react";
import Logo from "../components/Logo/Logo";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen pt-10">
      <Logo></Logo>
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 ">
          <img src={authImage} alt="AuthImage" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
