import React from "react";
import "./Viza.css";
import viza from "../../img/viza.svg";

function Viza() {
  return (
    <div className="viza">
      <div className="container">
        <h1 className="viza_text">Вывод средств</h1>
        <button className="viza_btn">
          {" "}
          <img src={viza} />{" "}
          <span className="vizamaster_text"> Visa, MasterCard </span>
        </button>
        <div className="number_block">
          <div className="number_card">
            <label className="number_label">Номер карты</label>
            <input
              className="b_input"
              type="text"
              placeholder="Ввeдите номер карты"
            />
          </div>
          <div className="input_center">
            <div className="input_box">
              <label>Годен до</label>
              <input type="text" placeholder="MM" />
            </div>
            <div className="label_not">
              <input type="text" placeholder="ГГ" />
            </div>
            <div className="input_box">
              <label>CVC</label>
              <input type="text" placeholder="CVC" />
            </div>
          </div>
          <label className="summa_label">Сумма</label>
          <input
            className="summa_input"
            type="text"
            placeholder="Введите сумму вывода"
          />
          <button className="enter">Вывести</button>
        </div>
      </div>
    </div>
  );
}

export default Viza;
