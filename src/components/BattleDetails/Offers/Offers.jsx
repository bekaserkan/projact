import React from "react";
import "./Offers.css";
import cat from "../../../img/cat.svg";
import class1 from "../../../img/margin_class.svg";
import class2 from "../../../img/bottom.svg";
import phone from "../../../img/phone-line.svg";
import telegram from "../../../img/telegram-line.svg";
import checkbox from "../../../img/checkbox.svg";
import whatsap from "../../../img/whatsapp-line.svg";
import shodow from "../../../img/sword_fight.svg";

const Offers = () => {
  return (
    <div className="offers">
      <h1>У вас 31 предложений</h1>
      <div className="wrapper">
        <div className="contact">
          <div className="appas">
            <img className="cat" src={cat} />
            <p className="azim">
              Азим Д <img className="checkbox" src={checkbox} />{" "}
            </p>
            <p className="text1">
              <img className="class" src={class1} />
              19{" "}
            </p>
            <p className="text2">
              <img className="class" src={class2} /> 1
            </p>
            <p className="azim">
              Сражений{" "}
              <img
                style={{
                  width: "24px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                src={shodow}
              />{" "}
              47
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
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborumsunt in culpa qui
          officia deserunt mollit anim id est laborum
        </div>
        <ul>
          <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
          <li>voluptatem accusantium doloremque laudantium</li>
          <li>totam rem aperian</li>
        </ul>
        <div className="text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum{" "}
          <a style={{ color: "#0761DC" }} href="https://vk.com/user">
            https://vk.com/user
          </a>
        </div>
        <div className="buttons">
          <p>05 июля 2022, 17:56</p>
          <button className="btn">Выбрать исполнителем</button>
        </div>
      </div>
      <div className="wrapper">
        <div className="contact">
          <div className="appas">
            <img className="cat" src={cat} />
            <p className="azim">
              Нурик Н. Saborov <img className="checkbox" src={checkbox} />{" "}
            </p>
            <p className="text1">
              <img className="class" src={class1} />
              19{" "}
            </p>
            <p className="text2">
              <img className="class" src={class2} /> 1
            </p>
            <p className="azim">
              Сражений{" "}
              <img
                style={{
                  width: "24px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                src={shodow}
              />{" "}
              47
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
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborumsunt in culpa qui
          officia deserunt mollit anim id est laborum
        </div>
        <ul>
          <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
          <li>voluptatem accusantium doloremque laudantium</li>
          <li>totam rem aperian</li>
        </ul>
        <div className="text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum{" "}
          <a style={{ color: "#0761DC" }} href="https://vk.com/user">
            https://vk.com/user
          </a>
        </div>
        <div className="buttons">
          <p>05 июля 2022, 17:56</p>
          <button className="btn">Выбрать исполнителем</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
