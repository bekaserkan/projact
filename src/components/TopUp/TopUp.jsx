import React, { useState } from "react";
import "./TopUp.css";
import viza from "../../img/viza.svg";

function TopUp() {
  return (
    <div className="top_up_balanse">
      <div className="container">
        <h1 className="balance_text">Пополнение баланса</h1>
        <div className="balance_block">
          <div className="balance_btn">
            <img src={viza} />{" "}
            <span className="master_text"> Visa, MasterCard </span>
          </div>
          <label className="number_label">Номер карты</label>
          <input
            className="b_input"
            type="text"
            placeholder="Ввeдите номер карты"
          />
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
          <label>Сумма</label>
          <input
            className="summa_input"
            type="text"
            placeholder="Введите сумму вывода"
          />
          <button className="btn_end">Пополнить</button>
        </div>
      </div>
    </div>
  );
}

export default TopUp;
