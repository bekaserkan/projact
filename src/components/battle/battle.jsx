import React, { useEffect, useState } from "react";
import "./Battle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fite } from "../UI/fite/fite";
import { Loading } from "../UI/loading/loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, setTodoPage } from "../../store/actions/battleAction";

function Battle() {
  const { page, error, loading, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const pages = [1, 2, 3];

  useEffect(() => {
    dispatch(fetchTodos(page));
  }, [page]);

  if (error) {
    return <h1>{error}Ошибка</h1>;
  }

  return (
    <div className="battle">
      <div className="container">
        <h1>Все игры</h1>
        <div className="block">
          {loading ? (
            <div className="loading_div">
              <Loading />
            </div>
          ) : (
            todos.map((el) => (
              <Fite
                key={el.id + "fight"}
                photos={el.photos}
                title={el.title}
                batll={el.batll}
                puople={el.puople}
                price={el.price}
                text={el.text}
              />
            ))
          )}
        </div>
        <div className="pagination" style={{ display: "flex" }}>
          {pages.map((p, index) => (
            <div
              style={{
                background: p === page ? "#0761dc" : "#ffffff",
                color: p === page ? "#ffffff" : "#000",
              }}
              className="page"
              key={index}
              onClick={() => dispatch(setTodoPage(p))}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Battle;
