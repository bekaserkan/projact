import React, { useState } from "react";
import "./play.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import play_icons1 from "../../img/play_icons1.svg";
import play_icons2 from "../../img/play_icons2.svg";
import play_icons3 from "../../img/play_icons3.svg";

function Play() {
  const [card, setCard] = useState([]);

  const settings1 = {
    dots: false,
    infinite: true,
    slick_prev: false,
    speed: 600,
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
    fetch("https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota")
      .then((res) => res.json())
      .then((json) => {
        setCard(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      });
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
        
        <div className="playing">
          <Slider {...settings2} className="home_platform">
            {card.map((el) => (
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
                    <button className="btn">{el.text}</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Play;
