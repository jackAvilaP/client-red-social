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
      {/* Private header, transform to component */}
        <section className="flex justify-between h-9">
          <div className="flex">
            <h1>Timeline</h1>
            <button className="btn btn-primary btn-xs"> show new</button>
          </div>
          <h1>Hi, jackson</h1>
        </section>
        <section>
          <Outlet />
          <SideBar />
        </section>
      </section>
    </>
  );
};

export default PrivateLayout;
