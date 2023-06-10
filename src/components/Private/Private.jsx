import React, { useState } from "react";
import "./Private.css";
import { NavLink } from "react-router-dom";
import briliand from "../../img/briliand.svg";
import swords from "../../img/swords.svg";
import questions from "../../img/questions.svg";
import my_battle from "../../img/my_battle.svg";
import info from "../../img/info.svg";
import notifications from "../../img/notifications.svg";
import stars from "../../img/stars.svg";
import help from "../../img/help.svg";
import go_out from "../../img/go_out.svg";
import photo from "../../img/photo_provate.svg";
import TopUp from "../TopUp/TopUp";

function Private() {
  return (
    <div className="private">
      <div className="container">
        <div className="cabinet">
          <img className="photo" src={photo} />
          <div className="div">
            <div className="info">
              <h1>@beka</h1>
              <NavLink className="setting_data" to="/Tuning">
                Настройки данных
              </NavLink>
            </div>
            <div className="balance">
              <h3>
                <img src={briliand} /> Баланс 750 сом
              </h3>
              <NavLink to="/Battles/TopUp">
                <button className="top_up">Пополнить</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="icons">
          <NavLink className="icon" to="">
            <img src={swords} />
            Создать сражение
          </NavLink>
          <NavLink className="icon" to="">
            <img src={questions} />
            Вопросы и ответы
          </NavLink>
          <NavLink className="icon" to="">
            <img src={my_battle} />
            Мои сражения
          </NavLink>
          <NavLink className="icon" to="">
            <img src={info} />О сайте
          </NavLink>
          <NavLink className="icon" to="">
            <img src={notifications} />
            Уведомления
          </NavLink>
          <NavLink className="icon" to="">
            <img src={stars} />
            Идентификация
          </NavLink>
          <NavLink className="icon" to="">
            <img src={help} />
            Помощь
          </NavLink>
          <NavLink className="icon" to="">
            <img src={go_out} />
            Выйти
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Private;
