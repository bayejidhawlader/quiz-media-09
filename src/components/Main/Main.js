import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Tostify from "../Tostify/Tostify";
// import HeaderContent from "../HeaderContent/HeaderContent";
// import Nav from "../Nav/Nav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Tostify></Tostify>
      {/* <HeaderContent></HeaderContent> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
