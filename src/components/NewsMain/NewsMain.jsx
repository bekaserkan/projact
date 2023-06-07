import React from "react";
import "./NewsMain.css";
import { NewsMainData } from "./NewsMainData";

function NewsMain() {
  return (
    <div className="news_main">
      <div className="container">
        <h1>Новости</h1>
        {NewsMainData.map((el) => (
          <div key={el.id} className="wrapper">
            <img src={el.img} />
            <div className="content">
              <div className="card1">
                <div className="card2">
                  <h2>{el.title}</h2>
                  <p>{el.text}</p>
                </div>
              </div>
            </div>
            <div className="data">
              <span>{el.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsMain;
