import React from "react";
import { Route, Routes } from "react-router-dom";
import Private from "../../components/Private/Private";
import Tuning from "../Tuning/Tuning";
import Notify from "../../components/Notify/Notify";
import Help from "../../components/Help/Help";
import AboutSite from "../../components/AboutSite/AboutSite";
import QuestionAnswers from "../../components/QuestionAnswers/QuestionAnswers";
import Identification from "../../components/Identification/Identification";
import Profile from "../../components/Profile/Profile";
import Review from "../../components/Review/Review";
import { NotFoundPage } from "../NotFound/NotFound";

function PrivateHome() {
  return (
    <div className="private_home">
      <Routes path="/">
        <Route index element={<Private />} />
        <Route path="Notify" element={<Notify />} />
        <Route path="Help" element={<Help />} />
        <Route path="Review" element={<Review />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="AboutSite" element={<AboutSite />} />
        <Route path="Identification" element={<Identification />} />
        <Route path="QuestionAnswers" element={<QuestionAnswers />} />
        <Route path="Tuning/*" element={<Tuning />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default PrivateHome;
