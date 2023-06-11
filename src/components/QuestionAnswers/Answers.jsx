import React, { useState } from "react";
import "./QuestionAnswers.css";
import plus from "../../img/plus_acc.svg"
import minus from "../../img/minus_acc.svg"

export function Answers({ name, text }) {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="answers">
      <div className="accordion_title" onClick={() => setAccordion(!accordion)}>
        <h2> {name} </h2>
        <div className="circle">{accordion ? <img src={minus} /> : <img src={plus} /> }</div>
      </div>
      {accordion && (
        <p onClick={() => setAccordion(false)} className="accordion_content">
          {text}
        </p>
      )}
    </div>
  );
}
