import React from "react";
import "./Main.css";
import Advantages from "../../components/Advantages/Advantages";
import Faq from "../../components/Faq/Faq";
import NewsMain from "../../components/NewsMain/NewsMain";
import Play from "../../components/Game/Game";

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
