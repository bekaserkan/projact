import React from "react";
import { Route, Routes } from "react-router-dom";
import Private from "../../components/Private/Private";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import Tuning from "../Tuning/Tuning";
import Notify from "../../components/Notify/Notify";
import Help from "../../components/Help/Help";
import AboutSite from "../../components/AboutSite/AboutSite";
import QuestionAnswers from "../../components/QuestionAnswers/QuestionAnswers";

function PrivateHome() {
  return (
    <div className="private_home">
      <Routes path="/">
        <Route index element={<Private />} />
        <Route path="Notify" element={<Notify />} />
        <Route path="Help" element={ <Help/> } />
        <Route path="AboutSite" element={ <AboutSite/> } />
        <Route path="QuestionAnswers" element={ <QuestionAnswers/> } />
        <Route path="Tuning/*" element={<Tuning />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default PrivateHome;
