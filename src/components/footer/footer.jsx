import React from "react";
import "./Footer.css";
import logo from "../../img/footer_logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="border"></div>
      <div className="container">
        <img className="image" src={logo} />
        <h1>ВСЕ ПРАВА ЗАЩИЩЕНЫ 2021</h1>
        <h1>
          <a href="https://battleteams2.ru/promo/welcome/ru.html?_1lr=0-3455098_2075612_5157000849_13728253325_43853044151_main&source2=5259__1larg_sub%3D5157000849%26_1larg_sub4%3Dmain%26_1larg_sub2%3D13728253325%26yclid%3D15519739155087359999%26_1larg_sub3%3D43853044151&yclid=15519739155087359999">
            INFO@GMAIL.COM
          </a>
        </h1>
        <ul>
          <NavLink className="li" to="/">
            ГЛАВНАЯ
          </NavLink>
          <NavLink className="li" to="Battles">
            СРАЖЕНИЯ
          </NavLink>
          <NavLink className="li" to="Chavo">
            ЧАВО
          </NavLink>
          <NavLink className="li" to="News">
            НОВОСТИ
          </NavLink>
        </ul>
        <a href="#">
          <button className="btn_footer">
            <span className="word">GO TO TOP</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
