import React, {useState} from "react";

import Navbar from "./Navbar";
import SideNav from "./SideNav";
import About from "./About";
import Tech from "./Tech";
import Exp from "./Exp";
import Project from "./Project";

const App = () => {
  const [mode, setMode] = useState("lightMode");

  return (
    <>
      <Navbar mode={mode}/>
      <SideNav mode={mode} setMode={setMode}/>
      <About mode={mode}/>
      <Tech mode={mode}/>
      <Exp mode={mode}/>
      <Project mode={mode}/>
    </>
  );
};

export default App;
