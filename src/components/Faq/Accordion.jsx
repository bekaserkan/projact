import React, { useState } from "react";
import "./Faq.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion_item">
      <div className="accordion_title" onClick={() => setIsActive(!isActive)}>
        <div className="circle">{isActive ? "-" : "+"}</div>
        <h2> {title} </h2>
      </div>
      {isActive && (
        <p onClick={() => setIsActive(false)} className="accordion_content">
          {content}
        </p>
      )}
    </div>
  );
};

export default Accordion;
