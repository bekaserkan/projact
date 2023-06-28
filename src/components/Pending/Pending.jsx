import React from "react";
import "./Pending.css";
import can_img from "../../img/tanka.svg"
import checkbox from "../../img/checkbox.svg";
import thum from "../../img/eye-line.svg";
import reply from "../../img/reply-line.svg";
import class1 from "../../img/margin_class.svg";
import class2 from "../../img/bottom.svg";
import cat from "../../img/cat.svg";
import phone from "../../img/phone-line.svg";
import telegram from "../../img/telegram-line.svg";
import whatsap from "../../img/whatsapp-line.svg";

function Pending() {
  return (
    <div className="pending">
      <div className="container">
        <img className="can_img" src={can_img} />
        <div className="text_block">
          <h3>2x2. Dust, играем только А плент, до 8 побед</h3>
          <p className="create_text">Создано сегодня, 13:10</p>
          <p className="dota_text"> Категория “CS.GO”</p>
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
            Победитель:{" "}
            <span className="sum1">
              Азим Д. <img src={checkbox} /> appass1nato{" "}
            </span>
          </p>
          <div className="offers_block">
            {" "}
            <img className="line1" src={thum} />{" "}
            <span className="views">562 просмотров</span>
            <img className="line2" src={reply} />{" "}
            <span className="offers"> 18 предложений</span>
          </div>
        </div>
        <div className="comple">
          <p className="sum_text">
            Ставка: <span className="sum">1000 сом</span>
          </p>
          <p className="comp_text">
            Статус:<span className="comp"> Идет сражение</span>
          </p>
        </div>
        <div className="lane3"></div>
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
        <h3 className="battles">Сражение</h3>
        <div className="tron">
          <div className="tron1">
            <div className="nato1">
              <div className="for"> </div>
              Азим appass1nato Д.
              <p>0</p>
            </div>
            <div className="nato2">
              Кайрат TROn K. <p>0</p>
            </div>
          </div>
          <div className="f_block">
            <div className="f_center"></div>
            <div className="f_lane"></div>
            <div className="f_lane2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pending;
