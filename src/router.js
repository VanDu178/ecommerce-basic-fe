import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//User
import Home from "../src/pages/user/Home/Home";
import ProductList from "../src/pages/user/ProductList/ProductList";

//Admin
import AdminLayout from "../src/layouts/admin/AdminLayout.jsx";
import Dashboard from "../src/pages/admin/Dashboard/Dashboard";
import UserManage from "../src/pages/admin/UserManage/UserManage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        {/* Admin Pages */}
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<UserManage />} />
          {/* <Route path="OrderManage" element={<OrdesrManage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
