import React, { useState } from "react";
import "./Stars.css";

export default function Stars({ borderColor = "black", fillColor = "gold" }) {
  const [hasFillColor, setFillColor] = useState(false);

  function toggleStar() {
    setFillColor(!hasFillColor);
  }

  return (
    <div
      className="borderStar"
      style={{ backgroundColor: borderColor }}
      onClick={() => toggleStar()}
    >
      <div
        className="fillStar"
        style={{
          backgroundColor: `${hasFillColor ? fillColor : "whitesmoke"}`,
        }}
      ></div>
    </div>
  );
}
