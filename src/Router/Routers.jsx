import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PrivateLayout from "../components/private/PrivateLayout";
import PublicLayout from "../components/public/PublicLayout";

import Feed from "../components/publication/Feed";
import Login from "../components/user/Login";
import Register from "../components/user/Register";

const Routers = () => {
  return (
    <BrowserRouter>
      {/* nested routes       */}
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/social" element={<PrivateLayout />}>
          <Route index element={<Feed />} />
          <Route path="feed" element={<Feed />} />
        </Route>

        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
