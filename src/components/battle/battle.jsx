import React, { useState } from "react";
import "./Battle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fite } from "../UI/fite/fite";
import { Loading } from "../UI/loading/loading";

function Battle() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [batl, setBatl] = useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota?page=${page}&limit=9`
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
            <div className="loading_div">
              <Loading />
            </div>
          ) : (
            batl.map((el) => (
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

export default Battle;
