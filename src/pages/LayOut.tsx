import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default LayOut;
