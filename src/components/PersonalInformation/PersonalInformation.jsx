import React from "react";
import "./PersonalInformation.css";
import photo from "../../img/photo_provate.svg";
import { persData } from "./PersonalData";

function PersonalInformation() {
  return (
    <div className="personal_information">
      <div className="container">
        <h1 className="pers_text">Личная информация</h1>{" "}
        <img className="pers_photo" src={photo} />
        <div className="wrapper">
          {persData.map((el) => (
            <div key={el.id} className="box">
              <label className="pers_label">{el.name}</label>
              <input type="text" placeholder={el.placeholder} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
