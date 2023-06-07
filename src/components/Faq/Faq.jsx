import React from "react";
import Accordion from "./Accordion";
import { accordionData } from "./AccordionData";

function Faq() {
  return (
    <div className="faq">
      <div className="container">
        <h1>FAQ</h1>
        <div className="accordion">
          {accordionData.map((el) => (
            <Accordion key={el.id} title={el.title} content={el.content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
