import React from "react";
import { Route, Routes } from "react-router-dom";
import Funds from "../../components/Funds/Funds";
import Viza from "../../components/Viza/Viza";
import Elsom from "../../components/Elsom/Elsom";
import { NotFoundPage } from "../NotFound/NotFound";

function Withdrawal() {
  return (
    <div className="withdrawal">
      <Routes path="/">
        <Route index element={<Funds />} />
        <Route path="Viza" element={<Viza />} />
        <Route path="Elsom" element={<Elsom />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Withdrawal;
