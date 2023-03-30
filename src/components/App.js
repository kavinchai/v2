import React from "react";

import Navbar from "./Navbar";
import SideNav from "./SideNav";
import About from "./About";
import Tech from "./Tech";
import Exp from "./Exp";
import Project from "./Project";

const App = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <About />
      <Tech />
      <Exp />
      <Project />
    </>
  );
};

export default App;
