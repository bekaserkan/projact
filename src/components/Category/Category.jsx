import React, { useEffect, useState } from "react";
import "./Category.css";
import { Loading } from "../UI/loading/loading";
import { Btn, CategoryFile } from "./CategoryFile";
import check_mark from "../../img/check_mark.svg";
import { errorContact, success } from "../UI/sweetalert/sweetalert";
import { useNavigate } from "react-router-dom";

function Category() {
  const [type, setType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [divVisible, setDivVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDivs = () => {
    setDivVisible(!divVisible);
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

  function next() {
    if (divVisible == true) {
      success();
      navigate("/Battles/CreateBattles");
    } else {
      errorContact();
    }
  }

  return (
    <div className="category">
      <div className="container">
        <h1>Категории</h1>
        <div className="wrapper">
          <div className="box1">
            <h2>Категории</h2>
          </div>
          <div onClick={toggleDivs} className="box2">
            <h2>Выбрать все категории</h2>
            <div className="check_box">
              {divVisible ? <img src={check_mark} /> : ""}
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
              <CategoryFile key={el.id} photos={el.photos} title={el.title} />
            ))
          )}
        </div>
        <button onClick={next} className="next">
          Далее
        </button>
      </div>
    </div>
  );
}

export default Category;
