import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const PrivateLayout = () => {
  return (
    <>
      {/* LAYAOUT */}
      <NavBar />

      {/* Content Main */}
      <section>
        <Outlet />
      </section>
      {/* SideBar  */}
      <SideBar />
    </>
  );
};

export default PrivateLayout;
