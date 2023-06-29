import React, { useState } from "react";
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
import Response from "../../components/Response/Response";
import CreatTopUp from "../../components/CreatTopUp/CreatTopUp";
import BattleDetails from "../../components/BattleDetails/BattleDetails";
import Executor from "../../components/Executor/Executor";
import Publish from "../../components/Publish/Publish";

function Battles() {
  const [bid, setBid] = useState("");
  const [data, setData] = useState("");

  const handleItemClick = (backend) => {
    setData(backend);
  };

  return (
    <div className="battles">
      <Routes path="/">
        <Route index element={<Battle onItemClick={handleItemClick} />} />
        <Route path="Respond" element={<Respond backend={data} />} />
        <Route path="TopUp" element={<TopUp />} />
        <Route path="CreatTopUp" element={<CreatTopUp value={bid} />} />
        <Route path="Response" element={<Response backend={data} />} />
        <Route path="Cancellation" element={<Cancellation />} />
        <Route path="BattleDetails/*" element={<BattleDetails />} />
        <Route path="Completed" element={<Completed />} />
        <Route path="Executor" element={<Executor />} />
        <Route path="Pending" element={<Pending />} />
        <Route path="Publish" element={<Publish />} />
        <Route
          path="CreateBattles"
          element={<CreateBattles bid={bid} setBid={setBid} />}
        />
        <Route path="MyBattles/*" element={<MyBattles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Battles;
