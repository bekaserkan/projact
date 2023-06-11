import React from "react";
import "./QuestionAnswers.css";
import { Answers } from "./Answers";
import { AnswersData } from "./AnswersData";

function QuestionAnswers() {
  return (
    <div className="question_answers">
      <div className="container">
        <h1>Вопрос ответы</h1>
        <div className="questions">
          {AnswersData.map((el) => (
            <Answers key={el.id} name={el.name} text={el.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswers;
