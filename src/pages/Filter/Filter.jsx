import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import Strainer from "../../components/Strainer/Strainer";
import Category from "../../components/Category/Category";

function Filter() {
  return (
    <div className="filter_nome">
      <Routes path="/">
        <Route index element={<Strainer />} />
        <Route path="Category" element={<Category />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Filter;
