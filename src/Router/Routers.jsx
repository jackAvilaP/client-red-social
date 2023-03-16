import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateLayout from "../components/private/PrivateLayout";
import PublicLayout from "../components/public/PublicLayout";

import Feed from "../components/publication/Feed";
import People from "../components/publication/People";

import Publications from "../components/publication/Publications";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Setting from "../components/user/Setting";

const Routers = () => {
  return (
    <BrowserRouter>
      {/* nested routes */}

      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/social" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
          <Route path="people" element={<People />} />
          <Route path="publications" element={<Publications />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
