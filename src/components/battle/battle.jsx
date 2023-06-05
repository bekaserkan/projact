import React, { useState } from "react";
import "./battle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fite } from "../UI/fite/fite";

function Battle() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [batl, setBatl] = useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota?page=${page}&limit=6`
    )
      .then((res) => res.json())
      .then((json) => {
        setBatl(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <div className="battle">
      <div className="container">
        <h1>Все игры</h1>
        <div className="block">
          {isLoading ? (
            <h2 className="loading">Идет загрузка...</h2>
          ) : (
            batl.map((el, id) => (
              <Fite
                key={id.id}
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
        <ul className="pagination">
          {[...Array(5)].map((_, i) => (
            <li
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

export default Battle;
