import React, { useState } from "react";
import "./Executor.css";
import check_mark from "../../img/check_mark.svg";
import { useNavigate } from "react-router-dom";
import { success } from "../UI/sweetalert/sweetalert";

const Executor = () => {
  const [divVisible1, setDivVisible1] = useState(true);
  const [divVisible2, setDivVisible2] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="executor">
      <div className="container">
        <h1>Выбор исполнителя</h1>
        <h2>
          Выбрать пользователя{" "}
          <span style={{ color: "#0761DC" }}>Леха Lewa O.</span> исполнителем?
        </h2>
        <div className="som">
          <h1>
            Стоимость сражения:
            <span style={{ color: "#FFB156" }}> 3000 сом</span>
          </h1>
        </div>
        <h1 className="sed">Sed ut perspiciatis unde</h1>
        <div className="questions">
          <div
            onClick={() => setDivVisible1(!divVisible1)}
            className="question"
          >
            <img src={divVisible1 ? check_mark : ""} />
            <p>
              Eomnis iste natus error sit voluptatem accusantium doloremque{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
          </div>
          <div
            onClick={() => setDivVisible2(!divVisible2)}
            className="question"
          >
            <img src={divVisible2 ? check_mark : ""} />
            <p>
              Paudantium, totam rem aperaim, eaque ipsa quae ab illo inventore{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
          </div>
        </div>
        <p style={{ marginBottom: "18px", textAlign: "center" }}>
          Нажимая “Выбрать исполнителя” Вы согрлашаетесь с{" "}
        </p>
        <p style={{ marginBottom: "43px", textAlign: "center" }}>
          <a href="https://blog.cloudpayments.ru/kak-rabotaiet-protsiessingh-eliektronnykh-platiezhiei/">
            {" "}
            Правилами платежного сервиса
          </a>{" "}
          и
          <a href="https://youdo.com/sbr">
            {" "}
            Правилами сервиса “Сделка без риска”{" "}
          </a>
        </p>
        <button
          onClick={() => navigate("/PrivateHome") || success()}
          className="btn"
        >
          Выбрать исполнителем
        </button>
      </div>
    </div>
  );
};

export default Executor;
