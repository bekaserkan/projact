import React from "react";
import "./authorization.css";
import fasebook from "../../img/fasebook.svg";
import google from "../../img/google.svg";

function Authorization() {
  return (
    <div className="authorization">
      <div className="container">
        <h1>Авторизация</h1>
        <div>
          <button>Ваш электронный адрес</button>
          <button>
            <img src={fasebook} />{" "}
          </button>
          <button>
            <img src={google} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
