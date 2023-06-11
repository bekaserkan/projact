import React, { useState } from "react";
import "./Help.css";
import { errorContact, successSend } from "../UI/sweetalert/sweetalert";

function Help() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  function value1Change(e) {
    setValue1(e.target.value);
  }
  function value2Change(e) {
    setValue2(e.target.value);
  }

  function send() {
    if (value1 === "" || value2 === "") {
      errorContact();
    } else {
      successSend();
    }
    setValue1("");
    setValue2("");
  }

  return (
    <div className="help">
      <div className="container">
        <h1>Помощь</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun?
        </h2>
        <p>
          Lut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu . Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu{" "}
        </p>
        <div className="box_input">
          <label> Элкетронная почта </label>
          <input
            value={value1}
            onChange={value1Change}
            type="email"
            placeholder="Эл. почта"
          />
          <label> Опишите проблему </label>
          <input
            value={value2}
            onChange={value2Change}
            className="text"
            type="text"
            placeholder="Опишите проблему более подробно"
          />
          <button onClick={send} className="send">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;
