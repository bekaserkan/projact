import React, { useEffect, useState } from "react";
import "./Battles.css";
import Battle from "../../components/Battle/Battle";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import TopUp from "../../components/TopUp/TopUp";
import MyBattles from "../../components/MyBattles/MyBattles";
import CreateBattles from "../../components/CreateBattles/CreateBattles";
import Cancellation from "../../components/Cancellation/Cancellation";
import Completed from "../../components/Completed/Completed";
import Pending from "../../components/Pending/Pending";
import Respond from "../../components/Respond/Respond";

function Battles() {
  const [data, setData] = useState('');

  const handleItemClick = (backend) => {
    setData(backend);
  };

  return (
    <div className="battles">
      <Routes path="/">
        <Route index element={<Battle onItemClick={handleItemClick} />} />
        <Route path="Respond" element={<Respond backend={data} />} />
        <Route path="TopUp" element={<TopUp />} />
        <Route path="Cancellation" element={<Cancellation />} />
        <Route path="Completed" element={<Completed />} />
        <Route path="Pending" element={<Pending />} />
        <Route path="CreateBattles" element={<CreateBattles />} />
        <Route path="MyBattles/*" element={<MyBattles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Battles;
