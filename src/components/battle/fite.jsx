import React from "react";
import "./Battle.css"
import play_icons1 from "../../img/play_icons1.svg";
import play_icons2 from "../../img/play_icons2.svg";
import play_icons3 from "../../img/play_icons3.svg";
import { infoClick } from "../UI/sweetalert/sweetalert";
import Tilt from "react-parallax-tilt";

export function Fite({ photos, title, batll, puople, price, text }) {
  return (
    <Tilt>
      <div className="play_game">
        <img className="platform" src={photos} />
        <div className="content">
          <h1 className="h1">{title}</h1>
          <div className="icons">
            <span>
              <img src={play_icons1} />
              {batll}
            </span>
            <span>
              <img src={play_icons2} />
              {puople}
            </span>
            <span>
              <img src={play_icons3} /> до {price} $
            </span>
            <button onClick={infoClick} className="btn">
              {text}
            </button>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
