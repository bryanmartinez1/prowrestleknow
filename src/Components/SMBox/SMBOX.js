import React from "react";
import "./SMBox.css";

export default function SMBox({
  title,
  info,
  borderColor = "black",
  fillColor = "gold",
}) {
  return (
    <div className="SMBox" style={{ borderColor: borderColor }}>
      <div className="smBoxTitle" style={{ backgroundColor: fillColor }}>
        {title}
      </div>
      <pre className="smInfoDiv">{info}</pre>
    </div>
  );
}
