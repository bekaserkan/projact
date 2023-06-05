import React from "react";
import "./header.css";
import logo from "../../img/header_logo.png";
import { NavLink } from "react-router-dom";
import facebook from "../../img/🦆 icon _Facebook v1_.svg";
import instagram from "../../img/🦆 icon _Instagram_.svg";
import vk from "../../img/🦆 icon _vk_.svg";

function Header() {
  return (
    <div className="header">
      <div className="container1">
        <NavLink className="img" to="/">
          <img className="image" src={logo} />
        </NavLink>
        <div className="adds">
          <NavLink className="add1" to="Registration">
            <h1>Регистрация</h1>
          </NavLink>
          <NavLink className="add2" to="Authorization">
            <h1>Войти</h1>
          </NavLink>
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
            <img src={instagram} />
            <img src={vk} />
            <img src={facebook} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
