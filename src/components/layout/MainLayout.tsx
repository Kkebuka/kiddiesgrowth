import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNavBar from "./BottomNavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div data-theme="light" className=" scroll-smooth">
      <div className="lg:px-12">
        <Header />
        <Outlet />
      </div>
      <Footer />
      <BottomNavBar />
    </div>
  );
}
