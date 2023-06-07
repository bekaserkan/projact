import React from "react";
import "./Main.css";
import Play from "../../components/Play/Play";
import Advantages from "../../components/Advantages/Advantages";
import Faq from "../../components/Faq/Faq";

function Main() {
  return (
    <div className="main">
      <Play />
      <Advantages/>
      <Faq/>
    </div>
  );
}

export default Main;
