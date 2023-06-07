import React from "react";
import "./Main.css";
import Play from "../../components/Play/Play";
import Advantages from "../../components/Advantages/Advantages";
import Faq from "../../components/Faq/Faq";
import NewsMain from "../../components/NewsMain/NewsMain";

function Main() {
  return (
    <div className="main">
      <Play />
      <Advantages />
      <Faq />
      <NewsMain />
    </div>
  );
}

export default Main;
