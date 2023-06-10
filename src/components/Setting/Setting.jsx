import React, { useState } from "react";
import "./Setting.css";
import { NavLink } from "react-router-dom";
import user from "../../img/user.svg";
import key from "../../img/key.svg";
import out from "../../img/out.svg";
import { Modal } from "../UI/modal/modal";

function Setting() {
  const [open, setOpen] = useState(false);

  return (
    <div className="setting">
      <div className="container">
        <h1>Настройки</h1>
        <div className="set_box">
          <div className="box">
            <NavLink className="set" to="PersonalInformation">
              <img src={user} />
              Личная информация
            </NavLink>
          </div>
          <div className="box">
            <NavLink className="set" to="ChangePassword">
              <img src={key} />
              Смена пароля
            </NavLink>
          </div>
          <div className="box">
            <span onClick={() => setOpen(true)} className="set">
              <img src={out} />
              Выйти из профиля
            </span>
            {open && <Modal setOpen={setOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
