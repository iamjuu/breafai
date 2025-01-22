import React from "react";
import Navbar from "../../components/navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <main className=" ">
        {children}
      <Navbar /> 
      </main>
    </div>
  );
};

export default Layout;
