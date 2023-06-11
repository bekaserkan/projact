import React, { useState } from "react";
import "./Electronic.css";
import { NavLink, useNavigate } from "react-router-dom";
import { errorContact, successContact } from "../UI/sweetalert/sweetalert";

function Electronic() {
  const [entrance, setEntrance] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const entranceChange = (event) => {
    setEntrance(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  function Open() {
    if (entrance == 2023 && email === "@beka") {
      successContact();
      navigate('/PrivateHome')
      // window.location.href = '/Private'  
    } else {
      errorContact();
    }
  }

  return (
    <div className="electronic">
      <div className="container">
        <h1> Авторизация через электронный адрес </h1>
        <div className="profile">
          <input value={email} onChange={emailChange} type="email" placeholder="Введите электронный адрес" />
          <input
            value={entrance}
            onChange={entranceChange}
            type="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="wrapper">
          <button onClick={Open} className="btn_044">
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
