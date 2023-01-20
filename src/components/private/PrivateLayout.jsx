import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const PrivateLayout = () => {

  return (
    <>
      {/* LAYAOUT */}
      <NavBar />
      {/* Content Main */}
      <section>
        {/* Private header */}
        <section>
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default PrivateLayout;
