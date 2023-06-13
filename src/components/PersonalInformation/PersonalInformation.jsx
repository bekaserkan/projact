import React, { useState } from "react";
import "./PersonalInformation.css";
import photo from "../../img/photo_provate.svg";
import { persData, persInputData } from "./PersonalData";
import { errorContact, success } from "../UI/sweetalert/sweetalert";

function PersonalInformation() {
  const [inputs, setInputs] = useState("");

  const handleInputChange = (event) => {
    setInputs(event.target.value);
  };

  function save() {
    if (inputs === "") {
      errorContact();
    } else {
      success();
    }
    setInputs("");
  }

  return (
    <div className="personal_information">
      <div className="container">
        <h1 className="pers_text">Личная информация</h1>{" "}
        <img className="pers_photo" src={photo} />
        <div className="wrapper">
          {persInputData.map((item) => (
            <div key={item.key} className="box">
              <label className="pers_label">{item.title}</label>
              <input
                type="text"
                value={inputs}
                onChange={handleInputChange}
                placeholder={item.placeholder}
              />
            </div>
          ))}
          {persData.map((el) => (
            <div key={el.id} className="box">
              <label className="pers_label">{el.name}</label>
              <input type="text" placeholder={el.placeholder} />
            </div>
          ))}
        </div>
        <button onClick={save} className="pers_btn">
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default PersonalInformation;
