import React from "react";
import "./Battle.css";
import play_icons1 from "../../img/play_icons1.svg";
import play_icons2 from "../../img/play_icons2.svg";
import play_icons3 from "../../img/play_icons3.svg";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

export function Fite({
  el,
  photos,
  title,
  batll,
  puople,
  price,
  text,
  onItemClick,
}) {
  const navigate = useNavigate();

  return (
    <Tilt>
      <div onClick={() => onItemClick(el)} className="play_game">
        <img className="platform" src={photos} />
        <div onClick={() => navigate("Respond")} className="content">
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
            <button className="btn">{text}</button>
          </div>
        </div>
      </div>
    </Tilt>
  );
}
