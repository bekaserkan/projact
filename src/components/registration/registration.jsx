import React, { useState } from "react";
import "./Registration.css";
import { Link, NavLink } from "react-router-dom";
import { errorContact, successContact } from "../UI/sweetalert/sweetalert";

function Registration() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="registration">
      <div className="container">
        <h1>Регистрация</h1>
        <div className="r-block">
          <div className="registration1">
            <input type="text" placeholder="Введите номер" />
            <input type="email" placeholder="Введите эл.почту" />
            <input type="text" placeholder="Введите игровой ник" />
          </div>
          <div className="registration2">
            <input
              value={inputValue}
              onChange={handleInputChange}
              type="password"
              placeholder="Пароль"
              id="code4"
            />
            <input type="password" placeholder="Повторите пароль" />
          </div>
        </div>
        <button
          onClick={inputValue === "" ? errorContact : successContact}
          id="add_r"
        >
          Регистрация
        </button>
        <div className="r_footer">
          <span className="href">
            У вас есть профиль?<NavLink to="/Authorization">Войти</NavLink>
          </span>
          <span className="href">
            Забыли пароль?<NavLink to="/Restore">Восстановить</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Registration;