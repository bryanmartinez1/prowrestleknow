import React from "react";
import "./Information.css";
import infoJSON from "./Information.json";
import InfoDiv from "../../Components/InfoDiv/InfoDiv";

export default function Information() {
  return (
    <div className="information">
      {infoJSON.map((item, index) => (
        <InfoDiv index={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
