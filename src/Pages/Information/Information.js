import React from "react";
import "./Information.css";
import infoJSON from "./Information.json";

export default function Information() {
  return (
    <div className="information">
      <div>When is data updated?</div>
      <div>Data is updated every Sunday</div>
    </div>
  );
}
