import React from "react";
import "./play.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Play () {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="play">
            <div className="play_bg">
            <Slider {...settings} >
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
            </div>  
        </div>
    )
}

export default Play;