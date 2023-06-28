import React from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";
import modal_icon from "../../../img/modal_icon.svg";
import { useDispatch } from "react-redux";
import {
  privateDiv1Action,
  privateDiv2Action,
} from "../../../store/reducers/privateDivReducer";

export function Modal({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const exit = () => {
    dispatch(privateDiv1Action(false));
    dispatch(privateDiv2Action(true));
    navigate("/");
  };

  return (
    <div className="modal_animated">
      <div className="modal_div">
        <img src={modal_icon} />
        <p>
          Lorem ipsum dolor sit amet consectetur. Eget quis ullamcorper quis
          nec. Dolor diam feugiat lacus ac adipiscing justo.
        </p>
        <div className="btns">
          <button onClick={() => setOpen(false)} className="close">
            Отмена
          </button>
          <div onClick={exit} className="go_out">
            Выйти
          </div>
        </div>
      </div>
    </div>
  );
}
