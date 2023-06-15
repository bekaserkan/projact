import React, { useState } from "react";
import "./Identification.css";
import close from "../../img/close_iden.svg";
import { errorContact, success } from "../UI/sweetalert/sweetalert";
import { useNavigate } from "react-router-dom";

function Identification() {
  const [pass1, setPass1] = useState(false);
  const [pass2, setPass2] = useState(false);
  const [left, setLeft] = useState(true);
  const [rigth, setRigth] = useState(true);
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  function send() {
    if (value === "") {
      errorContact();
    } else {
      setModal(true);
      setTimeout(() => {
        setModal(false);
        navigate("/");
        success();
      }, 3000);
    }
  }

  return (
    <div className="identification">
      <div className="container">
        <h1 className="ident_text">Идентификация</h1>
        <p className="ident_text2">
          Идентификация счета необходима для предотвращения случаев
          мошенничества, противодействия отмыванию средств и финансирования
          терроризма.
        </p>
        <div className="input_block">
          <div className="nav_block">
            <label>Личные данные</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="top"
              type="text"
              placeholder="ФИО"
            />
            <input type="text" placeholder="Нoмер паспорта" />
            <input type="text" placeholder="ИНН" />
            <label>Дата рождения</label>
            <input
              className="top"
              type="text"
              placeholder="Нажмите что бы ввести дату"
            />
            <label>Документ, удостоверяющий личность</label>
            {rigth && (
              <button
                onClick={() => setPass1(true) || setRigth(false)}
                className="add"
              >
                Нажмите чтоб загрузить изображение
              </button>
            )}
            {pass1 && (
              <div className="image1">
                <img
                  onClick={() => setPass1(false) || setRigth(true)}
                  className="close"
                  src={close}
                />
              </div>
            )}
          </div>
          <div className="nav_block">
            <label>Адрес проживания</label>
            <input className="top" type="text" placeholder="страна" />
            <input type="text" placeholder="Город" />
            <input type="text" placeholder="Адрес" />
            <label>Документ, подверждающий адрес проживания</label>
            {left && (
              <button
                onClick={() => setPass2(true) || setLeft(false)}
                className="add"
              >
                Нажмите чтоб загрузить изображение
              </button>
            )}
            {pass2 && (
              <div className="image2">
                <img
                  onClick={() => setPass2(false) || setLeft(true)}
                  className="close"
                  src={close}
                />
              </div>
            )}
          </div>
        </div>
        <button onClick={send} className="ident_btn">
          Отправить на проверку
        </button>
        {modal && (
          <div className="wrapper">
            <div className="modal">
              {" "}
              <span class="loader_i"></span> <h2>Идет проверка документов</h2>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Identification;
