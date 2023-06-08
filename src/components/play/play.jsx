import React, { useState } from "react";
import "./Play.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import play_icons1 from "../../img/play_icons1.svg";
import play_icons2 from "../../img/play_icons2.svg";
import play_icons3 from "../../img/play_icons3.svg";
import all_strelka from "../../img/all_strelka.png";
import { NavLink } from "react-router-dom";
import { infoClick } from "../UI/sweetalert/sweetalert";
import { Join_game } from "../UI/join_game/join_game";
import { Loading } from "../UI/loading/loading";
import Tilt from "react-parallax-tilt";

function Play() {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slick_prev: false,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota")
      .then((res) => res.json())
      .then((json) => {
        setCard(json);
      })
      .catch(() => {
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="play">
      <div className="play_bg">
        <Slider {...settings1}>
          <div>
            <div className="img"></div>
          </div>
          <div>
            <div className="img"></div>
          </div>
          <div>
            <div className="img"></div>
          </div>
        </Slider>
      </div>
      <div className="container">
        <h1>Сыграй с нами</h1>
        <NavLink to="Battles" className="all">
          {" "}
          Все игры <img className="all_stralka" src={all_strelka} />{" "}
        </NavLink>
        <div className="playing">
          {isLoading ? (
            <div className="loading_div">
              <Loading />
            </div>
          ) : (
            <Slider {...settings2} className="home_platform">
              {card.map((el) => (
                <Tilt key={el.id}>
                  <div className="play_game">
                    <img className="platform" src={el.photos} />
                    <div className="content">
                      <h1 className="h1">{el.title}</h1>
                      <div className="icons">
                        <span>
                          <img src={play_icons1} />
                          {el.batll}
                        </span>
                        <span>
                          <img src={play_icons2} />
                          {el.puople}
                        </span>
                        <span>
                          <img src={play_icons3} /> до {el.price} $
                        </span>
                        <button onClick={infoClick} className="btn">
                          {el.text}
                        </button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              ))}
            </Slider>
          )}
        </div>
        <Join_game />
      </div>
    </div>
  );
}

export default Play;
