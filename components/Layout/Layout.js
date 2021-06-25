import React from "react";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ToastContainer />
    </div>
  );
};

export default Layout;
