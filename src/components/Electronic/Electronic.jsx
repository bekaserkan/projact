import React, { useState } from "react";
import "./Electronic.css";
import { NavLink } from "react-router-dom";
import { errorContact, successContact } from "../UI/sweetalert/sweetalert";

function Electronic() {
  const [entrance, setEntrance] = useState("");

  const entranceChange = (event) => {
    setEntrance(event.target.value);
  };

  return (
    <div className="electronic">
      <div className="container">
        <h1> Авторизация через электронный адрес </h1>
        <div className="profile">
          <input type="emaшl" placeholder="Введите электронный адрес" />
          <input
            value={entrance}
            onChange={entranceChange}
            type="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="wrapper">
          <button
            onClick={entrance === "" ? errorContact : successContact}
            className="btn_044"
          >
            Войти
          </button>
          <span className="two">
            <p>
              Нету профиля?{" "}
              <NavLink className="a" to="/Registration">
                Зарегистрироваться
              </NavLink>
            </p>
            <p>
              Забыли пароль?{" "}
              <NavLink className="a" to="/Restore">
                Восстановить
              </NavLink>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Electronic;
