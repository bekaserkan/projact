import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Strainer from "../../components/Strainer/Strainer";
import Category from "../../components/Category/Category";
import { NotFoundPage } from "../NotFound/NotFound";

function Filter() {
  const [selectedBackend, setSelectedBackend] = useState("");

  const handleItemClick = (backend) => {
    setSelectedBackend(backend);
  };

  return (
    <div className="filter_nome">
      <Routes path="/">
        <Route index element={<Strainer data={selectedBackend} />} />
        <Route path="Category" element={<Category handleItemClick={handleItemClick} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Filter;
