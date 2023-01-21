import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import AuthVerify from "../utils/AuthVerify";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = () => {
  return (
    <React.Fragment>
      <Toaster />
      <Navbar />
      <div className="relative min-h-screen">
        <Outlet />
        <AuthVerify />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
