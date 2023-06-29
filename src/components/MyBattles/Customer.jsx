import React from "react";
import "./MyBattles.css";
import { NavLink } from "react-router-dom";
import dota from "../../img/dota.svg";
import dust from "../../img/dust.svg";
import tt10 from "../../img/tt10.svg";
import canceled from "../../img/canceled.svg";
import completed from "../../img/completed.svg";
import expectation from "../../img/expectation.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  modalAction1,
  modalAction2,
  modalAction3,
} from "../../store/actions/modalActions";

export function Customer() {
  const dispatch = useDispatch();
  const { modal1, modal2, modal3 } = useSelector((state) => state.modals);

  function TrueModal1() {
    dispatch(modalAction1(true));
  }
  function FalseModal1() {
    dispatch(modalAction1(false));
  }
  function TrueModal2() {
    dispatch(modalAction2(true));
  }
  function FalseModal2() {
    dispatch(modalAction2(false));
  }
  function TrueModal3() {
    dispatch(modalAction3(true));
  }
  function FalseModal3() {
    dispatch(modalAction3(false));
  }

  return (
    <div className="customer">
      <div
        onMouseEnter={TrueModal1}
        onMouseLeave={FalseModal1}
        className="box_data"
      >
        <img className="img" src={dota} />
        <p className="name">
          Dota 2, Играем на SF, мид до 2 смертей или до падения т1
        </p>
        <p>Игра начинается: 19:25, 04.06.21 </p>
        <p>Ставка: 1000 сом </p>
        <div>
          <p className="status">
            <img src={canceled} /> Отменен
          </p>
        </div>
        {modal1 && (
          <div className="send">
            <NavLink className="link" to="/Battles/Cancellation">
              Смотреть историю
            </NavLink>
          </div>
        )}
      </div>
      <div
        onMouseEnter={TrueModal2}
        onMouseLeave={FalseModal2}
        className="box_data"
      >
        <img className="img" src={dust} />
        <p className="name"> 2x2, Dust2, играем только А плент, до 8 побед </p>
        <p>Игра начинается: 20:00, 03.06.21 </p>
        <p>Ставка: 500 сом </p>
        <div>
          <p className="status">
            <img src={completed} /> Завершен
          </p>
        </div>
        {modal2 && (
          <div className="send">
            <NavLink className="link" to="/Battles/Completed">
              {" "}
              Смотреть историю{" "}
            </NavLink>
          </div>
        )}
      </div>
      <div
        onMouseEnter={TrueModal3}
        onMouseLeave={FalseModal3}
        className="box_data"
      >
        <img className="img" src={tt10} />
        <p className="name">
          {" "}
          ТТ10, химки перед фантаном, только бб, без голды и фугасов{" "}
        </p>
        <p>Игра начинается: 20:00, 03.06.21 </p>
        <p>Ставка: 100 сом </p>
        <div>
          <p className="status">
            <img src={expectation} /> В ожидании
          </p>
        </div>
        {modal3 && (
          <div className="send">
            <NavLink className="link" to="/Battles/Pending">
              {" "}
              Смотреть историю{" "}
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
