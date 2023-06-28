import React from "react";
import "./BattleDetails.css";
import image from "../../img/cancellation.svg";
import Details from "./Details/Details";
import Offers from "./Offers/Offers";
import { NavLink, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

const BattleDetails = () => {
  return (
    <div className="battle_details">
      <div className="container">
        <img src={image} />
        <div className="title">
          <NavLink className="nav" to="Details">
            Детали сражения
          </NavLink>
          <NavLink className="nav" to="Offers">
            Предложения(31)
          </NavLink>
        </div>
        <Routes>
          <Route path="Details" element={<Details />} />
          <Route path="Offers" element={<Offers />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default BattleDetails;
