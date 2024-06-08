import React from "react";
import "./InfoDiv.css";

export default function InfoDiv({ question, answer }) {
  return (
    <div className="infoContainer">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
}
