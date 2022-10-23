import "./styles.css";
import React, { useState } from "react";
import data from "./data";
import QuestionItem from "./Question";

export default function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="menu">
      <div className="top-box">
        <h3>Questions And Answers About Login</h3>

        <div className="faq">
          {questions.map((question) => {
            return <QuestionItem key={question.id} {...question} />;
          })}
        </div>
      </div>
    </div>
  );
}
