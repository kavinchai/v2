import React, {useState} from "react";

import Navbar from "./Navbar";
import SideNav from "./SideNav";
import About from "./About";
import Tech from "./Tech";
import Exp from "./Exp";
import Project from "./Project";

const App = () => {
  const [mode, setMode] = useState("darkMode");

  return (
    <>
      <Navbar />
      <SideNav mode={mode} setMode={setMode}/>
      <About mode={mode}/>
      <Tech mode={mode}/>
      <Exp mode={mode}/>
      <Project />
    </>
  );
};

export default App;
