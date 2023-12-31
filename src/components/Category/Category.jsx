import React, { useEffect, useState } from "react";
import "./Category.css";
import { Loading } from "../UI/loading/loading";
import { CategoryFile } from "./CategoryFile";
import check_mark from "../../img/check_mark.svg";
import { useNavigate } from "react-router-dom";

function Category({ handleItemClick }) {
  const [type, setType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [divVisible1, setDivVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDivs = () => {
    setDivVisible(!divVisible1);
  };

  useEffect(() => {
    fetch(
      `https://647ce174c0bae2880ad14bc3.mockapi.io/play_dota?limit=8:limit=8`
    )
      .then((res) => res.json())
      .then((json) => {
        setType(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="category">
      <div className="container">
        <h1>Категории</h1>
        <div className="wrapper">
          <div className="box1">
            <h2>Категории</h2>
          </div>
          <div
            onClick={() => toggleDivs() || handleItemClick("Все категории")}
            className="box2"
          >
            <h2>Выбрать все категории</h2>
            <div className="check_box">
              {divVisible1 ? <img src={check_mark} /> : ""}
            </div>
          </div>
        </div>
        <div className="rooms">
          {isLoading ? (
            <div className="loading_div">
              <Loading />
            </div>
          ) : (
            type.map((el) => (
              <div key={el.id} onClick={() => handleItemClick(el.title)}>
                <CategoryFile
                  photos={el.photos}
                  title={el.title}
                  divVisible1={divVisible1}
                />
              </div>
            ))
          )}
        </div>
        <button onClick={() => navigate("/Filter")} className="next">
          Далее
        </button>
      </div>
    </div>
  );
}

export default Category;
