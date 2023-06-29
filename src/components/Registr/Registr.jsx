import React, { useState } from "react";
import "./Registr.css";
import { NavLink } from "react-router-dom";
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
        <div>
          <form action="" method="post" className="r-block">
            <div className="registration1">
              <input required type="text" placeholder="Введите номер" />
              <input required type="email" placeholder="Введите эл.почту" />
              <input required type="text" placeholder="Введите игровой ник" />
            </div>
            <div className="registration2">
              <input
                required
                value={inputValue}
                onChange={handleInputChange}
                type="password"
                placeholder="Пароль"
                id="code4"
              />
              <input required type="password" placeholder="Повторите пароль" />
            </div>
          </form>
        </div>
        <button
          onClick={() =>
            inputValue === "" ? errorContact() : successContact()
          }
          aria-required
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
