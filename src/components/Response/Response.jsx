import React, { useState } from "react";
import "./Response.css";
import photo from "../../img/photo_provate.svg";
import king from "../../img/king.svg";
import plus from "../../img/iden_plus.svg";
import som from "../../img/battle_som.svg";
import { alertClick, success } from "../UI/sweetalert/sweetalert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import iks from "../../img/krest.png";
import {
  modalAction,
  modalAction1,
  modalAction2,
} from "../../store/actions/modalAction";
import { UsersData } from "../CreateBattles/UserData";
import crest from "../../img/crest.svg";
import clean from "../../img/clean.png";

const Response = ({ backend }) => {
  const { modal, modal1, modal2 } = useSelector((state) => state.modals);
  const [divs, setDivs] = useState([]);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createDiv = ([el]) => {
    const newDiv = (
      <>
        <img src={el.img} />
        <span>{el.name}</span>
      </>
    );
    setDivs([...divs, newDiv]);
  };

  const removeDiv = (index) => {
    const updatedDivs = [...divs];
    updatedDivs.splice(index, 1);
    setDivs(updatedDivs);
  };

  function TrueDiv() {
    dispatch(modalAction1(true));
  }

  function FalseDiv() {
    dispatch(modalAction1(false));
  }

  function TrueModal() {
    dispatch(modalAction(true));
  }

  function FalseModal() {
    dispatch(modalAction(false));
  }

  return (
    <div className="response">
      <div className="container">
        <div className="wrapper">
          <div className="save1">
            <label>Текст отклика</label>
            <input
              className="heigth"
              type="text"
              placeholder="Расскажите почему именно вы должны сражаться"
            />
            <label>Команда</label>
            <input type="text" placeholder="Введите название команды" />
          </div>
          <div className="save2">
            <label>Игрок</label>
            <div className="user">
              <div className="user_box">
                <img className="photo" src={photo} />
                <span>@beka</span>
                <img src={king} />
              </div>
            </div>
            <div onClick={() => TrueModal()} className="add_user">
              <p>Добавить игрока</p>
              <img src={plus} />
            </div>
            {modal1 && (
              <div className="wrapper_users">
                <div
                  onClick={() => FalseDiv() || setDivs([])}
                  className="clear"
                >
                  Очистить все
                </div>
                {divs.map((div, index) => (
                  <div className="box" key={index}>
                    {div}
                    <button className="close">
                      <img
                        onClick={() => removeDiv(index)}
                        className="cl"
                        src={crest}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="send">
          <h1 style={{ color: "#ffffff" }}>
            Стоимость сражения:{" "}
            <span style={{ color: "#FFB156" }}>
              {backend ? backend.price : 0} сом
            </span>
          </h1>
          <button
            onClick={() =>
              backend.price !== 750
                ? dispatch(modalAction2(true)) || alertClick()
                : success()
            }
            className="response_btn"
          >
            Откликнуться
          </button>
        </div>
        {modal2 && (
          <div className="top">
            {" "}
            <button onClick={() => navigate("/Battles/TopUp")} className="btn">
              {" "}
              Пополнить баланс{" "}
            </button>{" "}
            <p className="red">
              {" "}
              На вашем балансе недостаточно средств для создания сражения{" "}
            </p>{" "}
            <p>
              <img src={som} /> Ваш баланс 750 сом{" "}
            </p>
          </div>
        )}
        {modal && (
          <div className="modal">
            <div onClick={() => FalseModal()} className="false"></div>
            <div className="obl">
              <div className="menu">
                <div className="search_div">
                  <input
                    className="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    placeholder="Введите..."
                  />
                  <img
                    onClick={() => setValue("")}
                    className="clean"
                    src={clean}
                  />
                  <img onClick={() => FalseModal()} className="iks" src={iks} />
                </div>
                {UsersData.filter((obj) => {
                  const fullName = obj.name.toLowerCase();
                  return fullName.includes(value.toLowerCase());
                }).map((obj) => (
                  <div
                    key={obj.id}
                    onClick={() => createDiv([obj]) || TrueDiv()}
                    className="users_box"
                  >
                    <img src={obj.img} />
                    <p>{obj.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Response;
