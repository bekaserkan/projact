import React, { useState } from "react";
import "./Strainer.css";
import { useNavigate } from "react-router-dom";
import { infoClick } from "../UI/sweetalert/sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../store/reducers/modalReducers";
import { relevanceData } from "./StrainerData";

function Strainer() {
  const [selectedBackend, setSelectedBackend] = useState(null);
  const { modal } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (backend) => {
    setSelectedBackend(backend);
  };

  function TrueModal() {
    dispatch(modalAction(true));
  }
  function FalseModal() {
    dispatch(modalAction(false));
  }

  return (
    <div className="strainer">
      <div className="container">
        <h1>Фильтр</h1>
        <div className="wrapper">
          <div className="save_first">
            <label>Категории</label>
            <button onClick={() => navigate("Category")} className="cate">
              Все категории
            </button>
            <label>Формат сражения</label>
            <button className="one">1x1</button>
            <button className="three">3x3</button>
            <button className="fife">5x5</button>
          </div>
          <div className="save_second">
            <label>Стоимость сражения</label>
            <div className="price">
              <input type="number" placeholder="от" />
              <div className="line"></div>
              <input type="number" placeholder="до" />
            </div>
            <label>Сортировать</label>
            <button onClick={TrueModal} className="sort">
              {selectedBackend.name}
            </button>
          </div>
          {modal && (
            <div className="modal">
              <div className="menu">
                {relevanceData.map((el) => (
                  <p
                    onClick={() => handleItemClick(el) || FalseModal()}
                    key={el.id}
                  >
                    {el.name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <button onClick={infoClick} className="show">
          {" "}
          Показать 23 278 сражений{" "}
        </button>
      </div>
    </div>
  );
}

export default Strainer;
