import React, { useState } from "react";
import "./Review.css";
import Star from "../UI/star/star";
import { errorContact, successSend } from "../UI/sweetalert/sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { modalReviewAction } from "../../store/reducers/modalSecond";
import { useNavigate } from "react-router-dom";
import briliand from "../../img/briliand.svg";

function Review() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { modalReview } = useSelector((state) => state.modalsSecond);

  function SendReview() {
    if (value == "") {
      errorContact();
    } else {
      True();
    }
  }
  function True() {
    dispatch(modalReviewAction(true));
  }

  function GoOut() {
    successSend();
    dispatch(modalReviewAction(false));
    navigate("/PrivateHome/Profile");
    setValue("");
  }

  return (
    <div className="review">
      <div className="container">
        <h1>Отзыв</h1>
        <h3 style={{ marginTop: "82px", marginBottom: "31px" }}>
          Средняя оценка
        </h3>
        <div className="grade">
          <div className="box">
            <p style={{ marginRight: "22px" }}>Вежливость</p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="box">
            <p style={{ marginRight: "22px" }}>Пунктуальность</p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="box">
            <p style={{ marginRight: "22px" }}>Активность</p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="wrapper">
          <label>Оставьте отзыв</label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Комментарий..."
          />
          <button onClick={SendReview} className="send">
            Отправить
          </button>
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
              <button onClick={GoOut} className="go_out">
                Вернуться назад
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
