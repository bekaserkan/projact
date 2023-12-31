import React from "react";
import "./MyBattles.css";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Customer } from "./Customer";
import { Performer } from "./Performer";
import { NotFoundPage } from "../../pages/NotFound/NotFound";

function MyBattles() {
  const navigate = useNavigate();
  return (
    <div className="mybattles">
      <div className="container">
        <h1>Мои сражения</h1>
        <div className="wrapper">
          <div className="title">
            <NavLink className="nav" to="customer">
              Я исполнитель
            </NavLink>
            <NavLink className="nav" to="performer">
              Я заказчик
            </NavLink>
          </div>
          <Routes>
            <Route path="customer" element={<Customer />} />
            <Route path="performer" element={<Performer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <div
          onClick={() => navigate("/Battles/BattleDetails/Details")}
          className="details"
        >
          Детали сражений
        </div>
      </div>
    </div>
  );
}

export default MyBattles;
