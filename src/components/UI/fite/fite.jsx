import React from "react";
import "../../battle/battle.css";
import play_icons1 from "../../../img/play_icons1.svg";
import play_icons2 from "../../../img/play_icons2.svg";
import play_icons3 from "../../../img/play_icons3.svg";
import { errorClick } from "../sweetalert/sweetalert";

export function Fite({ photos, title, batll, puople, price, text, key }) {
  return (
    <div key={key} className="play_game">
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
          <button onClick={errorClick} className="btn">{text}</button>
        </div>
      </div>
    </div>
  );
}
