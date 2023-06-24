import React from "react";
import "./Cancellation.css";
import cancellation from "../../img/cancellation.svg";
import line1 from "../../img/eye-line.svg";
import line2 from "../../img/reply-line.svg";
import cat from "../../img/cat.svg";
import class1 from "../../img/margin_class.svg";
import class2 from "../../img/bottom.svg";
import phone from "../../img/phone-line.svg";
import telegram from "../../img/telegram-line.svg";
import whatsap from "../../img/whatsapp-line.svg";
import checkbox from "../../img/checkbox.svg";
import lane9 from "../../img/Line 9.svg";

function Cancellation() {
  return (
    <div className="cancellation">
      <div className="container">
        <img className="call_img" src={cancellation} />
        <div className="text_block">
          <h3>Dota 2, Играем на SF, мид до 2 смертей или до падения т1</h3>
          <p className="create_text">Создано сегодня, 13:10</p>
          <p className="dota_text">Категория “Dota 2”</p>
        </div>
        <div className="lane"> </div>
        <p className="lorem_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <div className="game_rule">
          <p>
            Игра начинается: <span className="time">20:00, 05.06.21</span>
          </p>
          <p>
            Ставка: <span className="sum">1000 сом</span>
          </p>
          <p>
            Статус: <span className="cancelled">Отменен</span>
          </p>
          <div className="offers_block">
            {" "}
            <img className="line1" src={line1} />{" "}
            <span className="views">562 просмотров</span>
            <img className="line2" src={line2} />{" "}
            <span className="offers"> 18 предложений</span>
          </div>
        </div>
        <div className="lane2"></div>
        <p className="customer">Заказчик</p>
        <div className="contact">
          <div className="appas">
            <img className="cat" src={cat} />
            <p className="azim">
              Азим Д. <img src={checkbox} />{" "}
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
        </div>
      </div>
  );
}

export default Cancellation;
