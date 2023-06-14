import React, { useEffect, useState } from "react";
import "./NotFoundPage.css";
import not_page from "../../img/not_page.png";
import krest from "../../img/krest.png";

export function NotFoundPage() {
  const [modal, setModal] = useState();

  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 1000);
  }, []);

  return (
    <div className="notfoundpage">
      <h1>Такой страницы нету... </h1>
      <img src={not_page} />
      {modal && (
        <div className="wrapper">
          <div className="mod">
            <img onClick={() => setModal(false)} src={krest} />
            <p>Вернуться на главную страницу</p>
            <button className="exit">Выйти</button>
          </div>
        </div>
      )}
    </div>
  );
}
