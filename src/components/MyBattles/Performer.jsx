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
import { modalAction4, modalAction5, modalAction6 } from "../../store/actions/modalSecond";

export function Performer() {
  const dispatch = useDispatch();
  const { modal4, modal5, modal6 } = useSelector((state) => state.modalsSecond);

  function TrueModal4() {
    dispatch(modalAction4(true));
  }
  function FalseModal4() {
    dispatch(modalAction4(false));
  }
  function TrueModal5() {
    dispatch(modalAction5(true));
  }
  function FalseModal5() {
    dispatch(modalAction5(false));
  }
  function TrueModal6() {
    dispatch(modalAction6(true));
  }
  function FalseModal6() {
    dispatch(modalAction6(false));
  }

  return (
    <div className="performer">
      <div
        onMouseEnter={TrueModal4}
        onMouseLeave={FalseModal4}
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
        {modal4 && (
          <div className="send">
            <NavLink className="link" to="/Battles/Completed">
              {" "}
              Смотреть историю{" "}
            </NavLink>
          </div>
        )}
      </div>
      <div
        onMouseEnter={TrueModal5}
        onMouseLeave={FalseModal5}
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
        {modal5 && (
          <div className="send">
            <NavLink className="link" to="/Battles/Pending">
              {" "}
              Смотреть историю{" "}
            </NavLink>
          </div>
        )}
      </div>
      <div
        onMouseEnter={TrueModal6}
        onMouseLeave={FalseModal6}
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
        {modal6 && (
          <div className="send">
            <NavLink className="link" to="/Battles/Cancellation">
              Смотреть историю
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
