import React, { useState } from "react";
import "./Header.css";
import logo from "../../img/header_logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import instagram from "../../img/🦆 icon _Instagram_.svg";
import vk from "../../img/🦆 icon _vk_.svg";
import photo from "../../img/photo_provate.svg";
import { useSelector } from "react-redux";

function Header() {
  const { div1, div2 } = useSelector((state) => state.div);
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container1">
        <NavLink className="img" to="/">
          <img className="image" src={logo} />
        </NavLink>
        <div className="adds">
          {div1 && (
            <div
              onClick={() => navigate("./PrivateHome")}
              className="private_div"
            >
              <img src={photo} />
              <p>Личный кабинет</p>
            </div>
          )}
          {div2 && (
            <>
              <NavLink className="add1" to="Registration">
                <h1>Регистрация</h1>
              </NavLink>
              <NavLink className="add2" to="Authorization">
                <h1>Войти</h1>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="home">
        <div className="container2">
          <div className="menus">
            <NavLink className="menu" to="/">
              <h1>Главная</h1>
            </NavLink>
            <NavLink className="menu" to="Battles">
              <h1>Сражения</h1>
            </NavLink>
            <NavLink className="menu" to="Chavo">
              <h1>ЧАВО</h1>
            </NavLink>
            <NavLink className="menu" to="News">
              <h1>Новости</h1>
            </NavLink>
          </div>
          <div className="icons">
            <a className="site" href="https://www.instagram.com/">
              <img src={instagram} />{" "}
            </a>
            <a className="site" href="https://vk.com/">
              <img src={vk} />{" "}
            </a>
            <a className="site" href="https://github.com/bekaserkan">
              <div className="git"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
