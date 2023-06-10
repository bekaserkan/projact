import React from "react";
import "./modal.css";
import { NavLink } from "react-router-dom";
import modal_icon from "../../../img/modal_icon.svg";

export function Modal({ setOpen }) {
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
          <NavLink className="go_out" to="/">
            Выйти
          </NavLink>
        </div>
      </div>
    </div>
  );
}
