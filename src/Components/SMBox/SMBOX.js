import React from "react";
import "./SMBox.css";

export default function SMBox({
  title,
  info,
  borderColor = "black",
  fillColor = "gold",
  fontColor = "black",
}) {
  return (
    <div
      className="SMBox"
      style={{ borderColor: borderColor, color: fontColor }}
    >
      <div className="smBoxTitle" style={{ backgroundColor: fillColor }}>
        {title}
      </div>
      <pre className="smInfoDiv">{info}</pre>
    </div>
  );
}
