import "../css/App.css";
import React from "react";

import Navbar from "./Navbar";
import About from "./About";
import Exp from "./Exp";
import SideNav from "./SideNav";
import Project from "./Project";
import Tech from "./Tech";

const App = () => {
  return (
    <>
      <div className="appContainer">
        <Navbar />
        <SideNav />
        <About />
        <Tech />
        <Exp />
        <Project />
      </div>
    </>
  );
};

export default App;
