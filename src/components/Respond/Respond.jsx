import React, { useEffect } from "react";
import "./Respond.css";
import eye from "../../img/eye.svg";
import revers from "../../img/revers.svg";
import cat from "../../img/cat.svg";
import class1 from "../../img/margin_class.svg";
import class2 from "../../img/bottom.svg";
import phone from "../../img/phone-line.svg";
import telegram from "../../img/telegram-line.svg";
import checkbox from "../../img/checkbox.svg";
import whatsap from "../../img/whatsapp-line.svg";
import { RespondData } from "./RespondData";
import stone from "../../img/stone.svg";
import som from "../../img/coin-line.svg";
import { useNavigate } from "react-router-dom";

const Respond = ({ backend }) => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(backend));
  }, [backend]);

  useEffect(() => {
    const savedData = localStorage.getItem("myData");
    if (savedData) {
      const backends = JSON.parse(savedData);
      console.log(backends);
    }
  }, []);

  return (
    <div className="respond">
      <div className="container">
        <img className="image" src={backend.photos} />
        <div className="contant">
          <h1>{backend.title}</h1>
          <p style={{ color: "#B5B5B5" }}>Создано сегодня, 13:10</p>
          <p style={{ color: "#C644CB" }}>Категория “{backend.text}”</p>
        </div>
        <div className="wrapper">
          <p style={{ color: "#B5B5B5" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Dolorem dignissimos
            expedita deserunt. Nostrum quis nihil eligendi neque corporis modi
            ut?
          </p>
          <div className="save">
            <p style={{ color: "#FFFFFF" }}>Игра начинается: {backend.time}</p>
            <p style={{ color: "#FFFFFF" }}>
              Ставка:{" "}
              <span style={{ color: "#FFB156" }}>{backend.price} com</span>
            </p>
            <p className="p">
              <img className="i" src={eye} /> {backend.seen}
            </p>
            <p className="p">
              <img className="i" src={revers} /> {backend.offer}
            </p>
            <button
              onClick={() => navigate("/Battles/Response")}
              className="res"
            >
              Откликнуться
            </button>
          </div>
        </div>
        <div className="contact">
          <div className="appas">
            <img className="cat" src={cat} />
            <p className="azim">
              Азим Д <img src={checkbox} />{" "}
            </p>
            <p className="appas_text"> appass1nato </p>
            <p className="text1">
              <img className="class" src={class1} />
              19{" "}
            </p>
            <p className="text2">
              <img className="class" src={class2} /> 1
            </p>
          </div>
          <div className="messege">
            <div className="grid">
              <div className="hover">
                <h2>
                  <img src={phone} />
                  Телефон
                </h2>
              </div>
            </div>
            <div className="grid">
              <div className="hover">
                <h2>
                  <img src={telegram} />
                  Telegram
                </h2>
              </div>
            </div>
            <div className="hover">
              <h2>
                <img src={whatsap} />
                WhatsApp
              </h2>
            </div>
          </div>
        </div>
        <div className="exp">Похожие задания</div>
        <div className="data">
          {RespondData.map((el) => (
            <div key={el.id} className="box">
              <img src={stone} />
              <p style={{ color: "#ffffff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                morbi lorem orci, massa facilisis accumsan in. Mi dictum eu
                volutpat enim .
              </p>
              <p className="som">
                {el.price} <img src={som} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Respond;
