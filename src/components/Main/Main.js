import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
// import HeaderContent from "../HeaderContent/HeaderContent";
// import Nav from "../Nav/Nav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* <HeaderContent></HeaderContent> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
