import React, { useState } from "react";
import "./ChangePassword.css";
import { errorContact, success } from "../UI/sweetalert/sweetalert";

function ChangePassword() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  function saveAndClear() {
    if (value1 === "" || value2 === "" || value3 === "") {
      errorContact();
    } else {
      success();
      setValue1("");
      setValue2("");
      setValue3("");
    }
  }

  return (
    <div className="change_password">
      <div className="container">
        <h1 className="change_text">Смена пароля</h1>
        <div className="input_container">
          <div className="box">
            <label>Старый пароль</label>
            <input
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              type="text"
              placeholder="Введите старый пароль"
            />
          </div>
          <div className="box">
            <label>Новый пароль</label>
            <input
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              type="text"
              placeholder="Введите новый пароль"
            />
          </div>
          <div className="box">
            <input
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              type="text"
              placeholder="Повторите новый пароль"
            />
          </div>
        </div>
        <button onClick={saveAndClear} className="save">
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
