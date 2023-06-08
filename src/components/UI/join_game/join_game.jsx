import React, { useState } from "react";
import "./join_game.css";
import dota2 from "../../../img/dota2.svg";
import eye from "../../../img/eye.svg";
import revers from "../../../img/revers.svg";
import { joinClick } from "../sweetalert/sweetalert";
import { Loading } from "../loading/loading";

export function Join_game() {
  const [join, setJoin] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://647ce174c0bae2880ad14bc3.mockapi.io/play_join?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((json) => {
        setJoin(json);
      })
      .catch((err) => {
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <div className="join_game">
      {isLoading ? (
        <div className="loading_div">
          <Loading />
        </div>
      ) : (
        join.map((el) => (
          <div key={el.id + "yes"} className="wrapper">
            <div className="box">
              <img src={dota2} />
            </div>
            <div className="box">
              <p className="white">{el.name}</p>
            </div>
            <div className="box">
              <p className="white">Игра начинается: {el.time} </p>
              <p className="white">
                Ставка: <span> {el.som} com </span>
              </p>
            </div>
            <div className="box">
              <p className="grey">
                <img src={eye} /> {el.seen}
              </p>
            </div>
            <div className="box">
              <p className="grey">
                <img src={revers} /> {el.offer}
              </p>
            </div>
            <div className="box">
              <button onClick={joinClick} className="join">
                {" "}
                Присоединиться{" "}
              </button>
            </div>
          </div>
        ))
      )}
      <div className="post">
        <ul className="pagination">
          {[...Array(3)].map((_, i) => (
            <li
              key={i + "page"}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? "active" : ""}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
