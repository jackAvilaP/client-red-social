import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

const PrivateLayout = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      {/* LAYAOUT */}
      <NavBar />
      <div className="grid grid-cols-3 gap-6 ">
        {/* Content Main */}
        <section className="flex justify-center col-start-1 col-end-3">{token ? <Outlet /> : <Navigate to="/login" />}</section>
        <section className="col-start-3">
          <SideBar />
        </section>
      </div>
    </div>
  );
};

export default PrivateLayout;
