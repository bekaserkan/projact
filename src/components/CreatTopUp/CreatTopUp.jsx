import React, { useState } from "react";
import "./CreatTopUp.css";
import check_mark from "../../img/check_mark.svg";
import { WalletData } from "./WalletData";
import str from "../../img/minus.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalReviewAction } from "../../store/actions/modalSecond";
import briliand from "../../img/briliand.svg";

const CreatTopUp = ({ value }) => {
  const [divVisible1, setDivVisible1] = useState(true);
  const [divVisible2, setDivVisible2] = useState(true);
  const { modalReview } = useSelector((state) => state.modalsSecond);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="creat_top_up">
      <div className="container">
        <h1>Пополнение баланса</h1>
        <h2>На вашем балансе недостаточно средств для создания сражения</h2>
        <div className="som">
          <h1>
            Стоимость сражения:
            <span style={{ color: "#FFB156" }}> {value} сом</span>
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
        <div className="wallet">
          {WalletData.map((el) => (
            <div
              onClick={() => dispatch(modalReviewAction(true))}
              key={el.id}
              className="box"
            >
              <img src={el.img} />
              <p>{el.text}</p>
              <img className="str" src={str} />
            </div>
          ))}
        </div>
        {modalReview && (
          <div className="modal">
            <div
              onClick={() => dispatch(modalReviewAction(false))}
              className="false"
            ></div>
            <div className="text">
              <img src={briliand} />
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget quis ullamcorper
                quis nec. Dolor diam feugiat lacus ac adipiscing justo.
              </p>
              <button onClick={() => navigate("/Battles/CreateBattles")} className="go_out">
                Вернуться к созданию сражения
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatTopUp;
