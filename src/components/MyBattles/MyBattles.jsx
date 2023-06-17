import React from "react";
import "./MyBattles.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { Customer } from "./Customer";
import { Performer } from "./Performer";

function MyBattles() {
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
          <Routes path="/">
            <Route index />
            <Route path="customer" element={<Customer />} />
            <Route path="performer" element={<Performer />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MyBattles;
