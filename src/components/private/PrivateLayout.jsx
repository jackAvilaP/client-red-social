import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const PrivateLayout = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      {/* LAYAOUT */}
      <NavBar />

      {/* Content Main */}
      <section>{token ? <Outlet /> : <Navigate to="/login" />}</section>
    </>
  );
};

export default PrivateLayout;
