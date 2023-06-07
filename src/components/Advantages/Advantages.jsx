import React from "react";
import "./Advantages.css";
import border1 from "../../img/border1.svg";
import border2 from "../../img/border2.svg";
import border3 from "../../img/border3.svg";
import border4 from "../../img/border4.svg";
import border5 from "../../img/border5.svg";
import border6 from "../../img/border6.svg";

function Advantages() {
  return (
    <div className="advantages">
      <h1>Преимущества</h1>
      <div className="container">
        <div className="border1">
          <img className="close1" src={border1} />
          <div className="content">
            <h2>Техническая поддержка игроков</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </p>
          </div>
          <img className="close2" src={border2} />
        </div>
        <div className="border2">
          <img className="close1" src={border3} />
          <div className="content">
            <h2>Техническая поддержка игроков</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </p>
          </div>
          <img className="close2" src={border4} />
        </div>
        <div className="border3">
          <img className="close1" src={border5} />
          <div className="content">
            <h2>Техническая поддержка игроков</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit senectus
              in nunc .
            </p>
          </div>
          <img className="close2" src={border6} />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
