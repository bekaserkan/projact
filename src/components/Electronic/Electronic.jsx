import React from "react";
import "./Electronic.css";

function Electronic() {
  return (
    <div className="electronic">
      <div className="container">
        <h1> Авторизация через электронный адрес </h1>
        <div className="profile">
          <input type="emaшl" placeholder="Введите электронный адрес" />
          <input type="password" placeholder="Введите пароль" />
        </div>
        <button className="btn_044">Войти</button>
      </div>
    </div>
  );
}

export default Electronic;
