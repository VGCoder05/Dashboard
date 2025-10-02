import React from "react";
import MainRoutes from "./mainroutes/MainRoutes";
import NavbarLogic from './components/layout/Navbar/NavbarLogic';


const App = () => {
  return (
    <>
    <NavbarLogic/>
    <MainRoutes/>
    </>
  );
};

export default App;
