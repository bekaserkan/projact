import React from "react";
import "./Elsom.css";
import elcom from "../../img/elcom.svg";

function Elsom() {
  return (
    <div className="elsom">
      <div className="container">
        <h1 className="temes">Вывод средств</h1>
        <button className="elsom_btn">
          {" "}
          <img src={elcom} /> <span className="elsom_text"> Элсом </span>
        </button>
        <div className="elsom_block">
          <div className="small_block1">
            <label>Формат сражения </label>
            <input type="text" placeholder="Введите номер кошелька" />
          </div>
          <div className="small_block2">
            <label>Сумма</label>
            <input type="text" placeholder="Введите сумму вывода" />
          </div>
          <button className="enter">Вывести</button>
        </div>
      </div>
    </div>
  );
}

export default Elsom;
