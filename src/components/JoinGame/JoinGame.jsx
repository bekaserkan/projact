import React, { useEffect } from "react";
import "./JoinGame.css";
import dota2 from "../../img/dota2.svg";
import eye from "../../img/eye.svg";
import revers from "../../img/revers.svg";
import { joinClick } from "../UI/sweetalert/sweetalert";
import { Loading } from "../UI/loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoin, setJoinPage } from "../../store/actions/joinAction";

function JoinGame() {
  const dispatch = useDispatch();
  const { joins, error, page, loading } = useSelector((state) => state.join);
  const pages = [1, 2, 3];

  useEffect(() => {
    dispatch(fetchJoin(page));
  }, [page]);

  return (
    <div className="join_game">
      {loading ? (
        <div className="loading_div">
          <Loading />
        </div>
      ) : (
        joins.map((el) => (
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
      {error ? (
        <div className="error">
          <h1
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
            }}
          >
            {error}
          </h1>
        </div>
      ) : (
        <div className="pagination">
          {pages.map((p, index) => (
            <div
              style={{
                background: p === page ? "#0761dc" : "#ffffff",
                color: p === page ? "#ffffff" : "#000",
              }}
              className="page"
              key={index}
              onClick={() => dispatch(setJoinPage(p))}
            >
              {p}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JoinGame;
