import React, { useState } from "react";
import "./Publish.css";
import avatar1 from "../../img/avatar1.svg";
import thum from "../../img/eye-line.svg";
import reply from "../../img/reply-line.svg";
import cat from "../../img/cat.svg";
import checkbox from "../../img/checkbox.svg";
import minus from "../../img/minus_acc.svg";
import plus from "../../img/plus_acc.svg";
import user1 from "../../img/user1.svg";
import user2 from "../../img/user2.svg";
import user3 from "../../img/user3.svg";
import user4 from "../../img/user4.svg";
import class1 from "../../img/margin_class.svg";
import class2 from "../../img/bottom.svg";
import phone from "../../img/phone-line.svg";
import telegram from "../../img/telegram-line.svg";
import whatsap from "../../img/whatsapp-line.svg";
import { useNavigate } from "react-router-dom";
import mech from "../../img/mech_murasame.svg";

const Publish = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="publish">
      <div className="container">
        <img className="can_img" src={avatar1} />
        <div className="text_block">
          <h3>Dota 2, Играем на SF, мид до 2 смертей или до падения т1</h3>
          <p className="create_text">Создано сегодня, 13:10</p>
          <p className="dota_text"> Категория “Dota 2”O</p>
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
            Ставка: <span className="sum1">1000 сом</span>
          </p>
          <p>
            Формат игры: <span className="sum">5х5</span>
          </p>
          <div className="offers_block">
            <img className="line1" src={thum} />{" "}
            <span className="views">562 просмотров</span>
          </div>
          <div className="offers_block">
            <img className="line2" src={reply} />{" "}
            <span className="offers"> 18 предложений</span>
          </div>
        </div>
        <div className="team">
          <p>
            Команда: <span>-KGG-</span>
          </p>
          <p onClick={() => setTeam(!team)} className="team_p">
            Состав команды <img src={team ? plus : minus} alt="" />{" "}
          </p>
        </div>
        <div className="cust_lane"></div>
        {team && (
          <div className="save">
            <div className="box">
              <div className="user plus">
                <img src={cat} />
                <p>Азим Д. appass1nato </p>
              </div>
              <div className="user">
                <img src={user4} />
                <p>Кайрат К. TROn </p>
              </div>
            </div>
            <div className="box">
              <div className="user">
                <img src={user3} />
                <p>Адилет Н WizarD </p>
              </div>
              <div className="user">
                <img src={user1} />
                <p>WizarD Akt1 </p>
              </div>
            </div>
            <div className="box">
              <div className="user">
                <img src={user2} />
                <p>Сулайман Ш Sula </p>
              </div>
            </div>
          </div>
        )}
        <div className="wrapper">
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
          <button onClick={() => setModal(true)} className="btn">
            Опубликовать
          </button>
        </div>
        {modal && (
          <div className="modal">
            <div onClick={() => setModal(false)} className="false"></div>
            <div className="text">
              <img src={mech} />
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget quis ullamcorper
                quis nec. Dolor diam feugiat lacus ac adipiscing justo.
              </p>
              <button onClick={() => navigate("/")} className="go_out">
                На главную
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publish;
