import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const PublicLayout = () => {
  return (
    <>
      {/* LAYAOUT */}
      <NavBar />

      {/* Content Main */}
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default PublicLayout;
