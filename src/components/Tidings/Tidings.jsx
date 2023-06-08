import React, { useState } from "react";
import "./Tidings.css";
import { Loading } from "../UI/loading/loading";
import { NavLink } from "react-router-dom";

function Tidings() {
  const [page, setPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://647ce174c0bae2880ad14bc3.mockapi.io/play_join?page=${page}&limit=4`
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      })
      .catch((err) => {
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <div className="tidings">
      <div className="container">
        <h1>Новости</h1>
        {isLoading ? (
          <div className="loading_div">
            <Loading />
          </div>
        ) : (
          news.map((el) => (
            <div key={el.id} className="card">
              <img src={el.img} />
              <div className="content">
                <h2>{el.title}</h2>
                <p>{el.text}</p>
                <span>{el.data}</span>
                <NavLink to="Champions">
                  <button className="btn_read">читать дальше</button>
                </NavLink>
              </div>
            </div>
          ))
        )}
        <div className="post">
          <ul className="pagination">
            {[...Array(3)].map((_, i) => (
              <li
                key={i + "pagination"}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? "active" : ""}
              >
                {i + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tidings;
