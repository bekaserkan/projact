import React from "react";
import "./Profile.css";
import profil from "../../img/photo_provate.svg";
import flag from "../../img/flag.svg";
import flag_red from "../../img/flag_red.svg";
import sword_fight from "../../img/sword_fight.svg";
import thumbs_up from "../../img/thumbs up.svg";
import thumbs_down from "../../img/thumbs down.svg";
import prof_watsap from "../../img/prof_watsap.svg";
import prof_telegram from "../../img/prof_telegram.svg";
import prof_phone from "../../img/prof_phone.svg";
import Star from "../UI/star/star";
import bir from "../../img/bir.png";
import eki from "../../img/eki.png";
import uch from "../../img/uch.png";
import { ProfileData } from "./ProfileData";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="profile_section">
      <div className="container">
        <h1>@beka</h1>
        <div className="plofil_div">
          <img className="photo" src={profil} />
          <div className="victories">
            <div className="flex">
              <p style={{ color: "#ffffff" }}>Сражений</p>{" "}
              <img style={{ marginLeft: "15px" }} src={sword_fight} />
              <p style={{ color: "#ffffff" }}>47</p>
            </div>
            <div className="flex">
              <p style={{ color: "#6BE795" }}>Побед</p>{" "}
              <img style={{ marginLeft: "15px" }} src={flag} />
              <p style={{ color: "#6BE795" }}>28</p>
            </div>
            <div className="flex">
              <p style={{ color: "#6BE795" }}>
                <img src={thumbs_up} />
                19
              </p>{" "}
              <p style={{ color: "#6A6E77" }}>
                <img style={{ marginLeft: "24px" }} src={thumbs_down} />1
              </p>
            </div>
          </div>
          <div className="percent">
            <div className="flex">
              <p style={{ color: "#00A3FF" }}>Процент побед % 60</p>
            </div>
            <div className="flex">
              <p style={{ color: "#FB9191" }}>Побед</p>{" "}
              <img style={{ marginLeft: "15px" }} src={flag_red} />
              <p style={{ color: "#FB9191" }}>28</p>
            </div>
            <div className="messege">
              <div className="grid">
                <div className="hover">
                  <h2>
                    <img src={prof_phone} />
                    Телефон
                  </h2>
                </div>
              </div>
              <div className="grid">
                <div className="hover">
                  <h2>
                    <img src={prof_telegram} />
                    Telegram
                  </h2>
                </div>
              </div>
              <div className="hover">
                <h2>
                  <img src={prof_watsap} />
                  WhatsApp
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <h3>О себе</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <h3 style={{ marginTop: "82px", marginBottom: "31px" }}>
          Средняя оценка
        </h3>
        <div className="grade">
          <div className="box">
            <p style={{ marginRight: "22px" }}>Вежливость</p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="box">
            <p style={{ marginRight: "22px" }}>Пунктуальность</p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="box">
            <p style={{ marginRight: "22px" }}>Активность</p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="reviews">
          <p style={{ margin: "0" }}>Пока нету отзывов</p>
          <button onClick={() => navigate("/PrivateHome/Review")} className="add">
            Оставить отзыв
          </button>
        </div>
        <h3 style={{ marginTop: "91px", marginBottom: "30px" }}>Подверждены</h3>
        <div className="confirmed">
          <img src={bir} />
          <p style={{ marginRight: "50px" }}>Электронная почта</p>
          <img src={eki} />
          <p style={{ marginRight: "50px" }}>Steam профиль</p>
          <img src={uch} />
          <p>Телефонный номер</p>
        </div>
        <h3 style={{ marginTop: "97px", marginBottom: "42px" }}>Игры</h3>
        <div className="wrapper">
          {ProfileData.map((el) => (
            <div key={el.id} className="save">
              <div className="setka">
                <img src={el.image} />
                <span>{el.title}</span>
                <p>
                  <img src={el.img3} />
                  {el.battle}
                </p>
                <p>
                  <img src={el.img1} />
                  {el.flag}
                </p>
                <p>
                  <img src={el.img2} />
                  {el.flag_red}
                </p>
                {el.pers}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
