import React, { useState } from "react";
import "./Category.css";
import check_mark from "../../img/check_mark.svg";

export function CategoryFile({ photos, title, divVisible1 }) {
  const [divVisible, setDivVisible] = useState(false);

  const toggleDiv = () => {
    setDivVisible(!divVisible);
  };

  return (
    <>
      <div onClick={toggleDiv} className="room">
        <img src={photos} />
        <p>{title}</p>
        <div className="check_box">
          {divVisible || divVisible1 ? <img src={check_mark} /> : ""}
        </div>
      </div>
    </>
  );
}
