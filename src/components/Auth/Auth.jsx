import React from "react";
import "./Auth.css";
import fasebook from "../../img/fasebook.svg";
import google from "../../img/🦆 icon _google_.png";
import { NavLink } from "react-router-dom";

function Authorization() {
  return (
    <div className="authorization">
      <div className="container">
        <h1>Авторизация</h1>
        <div className="btn_block04">
          <button className="btn_04">
            <NavLink to="/Electronic" className="p">
              <p>Ваш электронный адрес</p>
            </NavLink>
          </button>
          <button className="btn_04">
            <a className="p" href="https://ru-ru.facebook.com/">
              <div className="image">
                <img src={fasebook} />
              </div>
              <p>Войти через Facebook</p>
            </a>
          </button>
          <button className="btn_04">
            <a
              className="p"
              href="https://accounts.google.com/v3/signin/identifier?dsh=S721453647%3A1686124699359469&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=ru&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"
            >
              <div className="image">
                <img src={google} />
              </div>{" "}
              <p>Войти через Google</p>
            </a>
          </button>
        </div>
        <div className="rules">
          <span>
            Нажимая 'Войти' вы соглашаетесь с
            <a
              className="a"
              href="http://cbd.minjust.gov.kg/act/view/ru-ru/202913?cl=ru-ru"
            >
              {" "}
              правилами и условиями{" "}
            </a>
            ислользования сервиса
          </span>
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
          <span>
            {" "}
            <NavLink className="open" to="/">
              {" "}
              Пропустить вход{" "}
            </NavLink>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
