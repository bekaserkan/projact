import React, { useState } from "react";
import "./CreateBattles.css";
import king from "../../img/king.svg";
import photo from "../../img/photo_provate.svg";
import som from "../../img/battle_som.svg";
import { alertClick, errorContact, success } from "../UI/sweetalert/sweetalert";
import { useNavigate } from "react-router-dom";
import plus from "../../img/add-fill.svg";
import crest from "../../img/crest.svg";
import { UsersData } from "./UserData";
import { sample } from "lodash";
import user6 from "../../img/user6.svg";
import CreatTopUp from "../CreatTopUp/CreatTopUp";

function CreateBattles({bid, setBid}) {
  const [topUp, setTopUp] = useState(false);
  const navigate = useNavigate();
  const [divs, setDivs] = useState([]);
  const [value, setValue] = useState("");
  const [randomData, setRandomData] = useState(user6);

  const getRandomData = () => {
    const randomValue = sample(UsersData.map((el) => el.img));
    setRandomData(randomValue);
  };

  const createDiv = () => {
    if (value === "") {
      errorContact();
    } else {
      const newDiv = (
        <>
          <img src={randomData} />
          <span>{value}</span>
        </>
      );
      setDivs([...divs, newDiv]);
      setValue("");
    }
  };

  const removeDiv = (index) => {
    const updatedDivs = [...divs];
    updatedDivs.splice(index, 1);
    setDivs(updatedDivs);
  };

  const numBid = Number(bid);

  function viewing() {
    if (numBid >= 750) {
      alertClick();
      setTopUp(true);
    } else {
      success();
      setTopUp(false);
      setBid("");
      setValue("");
    }
  }

  return (
    <div className="create_battles">
      <div className="container">
        <h1>Создание сражения</h1>
        <div className="wrapper">
          <div className="wrapper1">
            <div className="input_box">
              <label>Заголовок</label>
              <input type="text" placeholder="Введите заголовок" />
            </div>
            <div className="input_box descriptions">
              <label>Описание</label>
              <input
                className="description"
                type="text"
                placeholder="Введите описание"
              />
            </div>
            <div className="input_boxl">
              <label>Формат игры</label>
              <input className="add" type="text" placeholder="5x5" />
            </div>
            <div className="input_boxl">
              <label>Игрок</label>
              <div className="user">
                <div className="user_box">
                  <img className="photo" src={photo} />
                  <span>@beka</span>
                  <img src={king} />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper2">
            <div className="input_box">
              <label>Ставка</label>
              <input
                value={bid}
                onChange={(e) => setBid(e.target.value)}
                type="text"
                placeholder="Сумма ставки"
              />
            </div>
            <div className="input_box">
              <label>Дата и время</label>
              <input type="text" placeholder="Дата игры" />
            </div>
            <div className="input_box">
              <label></label>
              <input type="text" placeholder="Время игры" />
            </div>
            <div className="input_boxl">
              <label>Команда</label>
              <input
                className="add"
                type="text"
                placeholder="Введите название команды"
              />
            </div>
            <div className="input_boxl pl">
              <div className="plus_div">
                <img
                  onClick={() => createDiv() || getRandomData()}
                  className="plus"
                  src={plus}
                />
              </div>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="addl"
                type="text"
                placeholder="Добавить игрока"
              />
            </div>
          </div>
        </div>
        <div className="save">
          {divs.map((div, index) => (
            <div className="box" key={index}>
              {div}
              <button className="close">
                {" "}
                <img
                  onClick={() => removeDiv(index)}
                  className="cl"
                  src={crest}
                />{" "}
              </button>
            </div>
          ))}
        </div>
        <button onClick={viewing} className="viewing">
          Предварительный просмотр
        </button>
        {topUp && (
          <div className="top">
            {" "}
            <button
              onClick={() => navigate("/Battles/CreatTopUp")}
              className="btn"
            >
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
      </div>
    </div>
  );
}

export default CreateBattles;
