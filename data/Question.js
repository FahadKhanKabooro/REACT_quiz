import React from "react";
import Options from "../src/components/Options";

export default function Question({ question }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Options question={question} />
    </div>
  );
}
