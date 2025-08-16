import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import React from "react";
const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
        <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
