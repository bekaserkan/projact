import React from "react";
import "./Tuning.css";
import { Route, Routes } from "react-router-dom";
import Setting from "../../components/Setting/Setting";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import PersonalInformation from "../../components/PersonalInformation/PersonalInformation";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

function Tuning() {
  return (
    <div className="tuning">
      <Routes path="/">
        <Route index element={<Setting />} />
        <Route path="PersonalInformation" element={<PersonalInformation />} />
        <Route path="ChangePassword" element={<ChangePassword />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Tuning;
