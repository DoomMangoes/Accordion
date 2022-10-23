import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function QuestionItem({ title, info }) {
  const [show, setShow] = useState(false);

  return (
    <div className="question-box">
      <header>
        <h4>{title}</h4>

        <button onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {show && <p>{info}</p>}
    </div>
  );
}
