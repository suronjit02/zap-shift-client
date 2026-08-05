import React from "react";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-2 lg:mx-5 xl:mx-auto py-5 ">
      <Navbar />

      <div className="min-h-[calc(100vh-381px)] my-5">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
