import React from "react";
import "./Champions.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Loading } from "../UI/loading/loading";

function Champions({ backend, error, backends, isLoading, onItemClick }) {
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="champions">
      <div className="container">
        <h1>{backend.title}</h1>
        <div className="image">
          <img src={backend.img} />
        </div>
        <div className="text">
          <p>{backend.text}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            ornare leo ullamcorper sed tempor leo et ipsum elit. Lacus, rhoncus,
            vestibulum, parturient imperdiet pretium. Consequat sit in
            sollicitudin gravida risus egestas enim in. Enim quis id gravida
            dignissim velit
          </p>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
            ornare leo ullamcorper sed tempor leo et ipsum elit
          </span>
          <p className="data">{backend.data}</p>
        </div>
        <div className="other">
          <h2>Другие новости</h2>
          <div className="card_box">
            {isLoading ? (
              <div className="loading_div">
                <Loading />
              </div>
            ) : (
              <Slider {...settings3} className="slider">
                {backends.map((el) => (
                  <div key={el.id} className="cards">
                    <div key={el.id} className="card">
                      <img src={el.img} />
                      <div className="content">{el.title}</div>
                      <div className="down">
                        <p>{el.data}</p>
                        <a href="#">
                          <button
                            onClick={() => onItemClick(el)}
                            className="btn_new"
                          >
                            читать дальше
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
          {error ? (
            <h1
              style={{
                width: "100%",
                fontSize: "2rem",
                color: "white",
                textAlign: "center",
              }}
            >
              {" "}
              {error}{" "}
            </h1>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Champions;
