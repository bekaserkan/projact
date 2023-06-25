import React, { useState } from "react";
import "./Strainer.css";
import { useNavigate } from "react-router-dom";
import { infoClick } from "../UI/sweetalert/sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { relevanceData } from "./StrainerData";
import iks from "../../img/krest.png";
import {
  activeAction1,
  activeAction2,
  activeAction3,
  modalAction,
} from "../../store/actions/modalAction";

function Strainer({ data }) {
  const [selectedBackend, setSelectedBackend] = useState("");
  const { modal, active1, active2, active3 } = useSelector(
    (state) => state.modals
  );
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

  function Active1() {
    dispatch(activeAction1("active"));
    dispatch(activeAction2(""));
    dispatch(activeAction3(""));
  }
  function Active2() {
    dispatch(activeAction1(""));
    dispatch(activeAction2("active"));
    dispatch(activeAction3(""));
  }
  function Active3() {
    dispatch(activeAction1(""));
    dispatch(activeAction2(""));
    dispatch(activeAction3("active"));
  }

  return (
    <div className="strainer">
      <div className="container">
        <h1>Фильтр</h1>
        <div className="wrapper">
          <div className="save_first">
            <label>Категории</label>
            <button onClick={() => navigate("Category")} className="cate">
              {data ? data : "Все категории"}
            </button>
            <label>Формат сражения</label>
            <button onClick={Active1} className={`one ${active1}`}>
              1x1
            </button>
            <button onClick={Active2} className={`three ${active2}`}>
              3x3
            </button>
            <button onClick={Active3} className={`fife ${active3}`}>
              5x5
            </button>
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
              {selectedBackend ? selectedBackend.name : "По актуаьности"}
            </button>
          </div>
          {modal && (
            <div className="modal">
              <div onClick={() => FalseModal()} className="false"></div>
              <div className="menu">
                <img onClick={() => FalseModal()} className="iks" src={iks} />
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
