import React from "react";
import Logo from "../components/Logo/Logo";
import authImage from "../assets/authImage.png";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="flex min-h-screen">
        {/* left part - form */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 md:px-12">
          <div className="w-full max-w-md">
            <nav className="mb-8 flex justify-center md:justify-start">
              <Logo />
            </nav>

            <Outlet />
          </div>
        </div>

        {/* right part - image */}
        <div className="hidden md:flex flex-1 bg-[#FAFDF0] min-h-screen items-center justify-center p-10">
          <img
            className="max-w-full max-h-[85vh] object-contain"
            src={authImage}
            alt="AuthImage"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
