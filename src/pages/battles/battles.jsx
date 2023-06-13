import React from "react";
import "./Battles.css";
import Battle from "../../components/Battle/Battle";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import TopUp from "../../components/TopUp/TopUp";
import MyBattles from "../../components/MyBattles/MyBattles";
import Category from "../../components/Category/Category";
import CreateBattles from "../../components/CreateBattles/CreateBattles";

function Battles() {
  return (
    <div className="battles">
      <Routes path="/">
        <Route index element={<Battle />} />
        <Route path="TopUp" element={<TopUp />} />
        <Route path="Category" element={<Category />} />
        <Route path="CreateBattles" element={<CreateBattles />} />
        <Route path="MyBattles/*" element={<MyBattles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Battles;
