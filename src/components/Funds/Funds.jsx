import React from "react";
import "./Funds.css";
import viza from "../../img/viza.svg";
import elcom from "../../img/elcom.svg";
import { NavLink } from "react-router-dom";

function Funds() {
  return (
    <div className="funds">
      <div className="container">
        <h1 className="funds_text">Вывод средств</h1>
        <p className="funds_text2">
          Ваш баланс: <span>1 000 сом</span>{" "}
        </p>
        <div className="line"></div>
        <p className="funds_text3">Выберите способ вывода</p>
        <div className="block_card">
          <NavLink className="visa_card" to="Viza">
            {" "}
            <img src={viza} />{" "}
            <span className="card_text"> Visa, MasterCard </span>{" "}
          </NavLink>
          <NavLink className="elcom_card" to="Elsom">
            {" "}
            <img src={elcom} /> <span className="card_text"> Элсом </span>
          </NavLink>
        </div>
        <p className="histore">История операций</p>
      </div>
    </div>
  );
}

export default Funds;
