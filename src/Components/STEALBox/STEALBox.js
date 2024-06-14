import React from "react";
import "./STEALBox.css";

export default function STEALBox({
  left,
  right,
  borderColor = "black",
  fillColor = "gold",
  fontColor = "black",
}) {
  return (
    <div
      className="STEALBox"
      style={{ borderColor: borderColor, color: fontColor }}
    >
      <div
        className="SBLeft"
        style={{ borderColor: borderColor, backgroundColor: fillColor }}
      >
        {left}
      </div>
      <pre className="SBRight">{right}</pre>
    </div>
  );
}
