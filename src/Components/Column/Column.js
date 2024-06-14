import React from "react";
import "./Column.css";

export default function Column({
  width,
  header,
  content,
  hasRightBorder,
  fillColor = "white",
  borderColor = "black",
  fontColor = "black",
}) {
  return (
    <div
      className="Column"
      style={{
        width: width,
        borderRight: `${hasRightBorder ? `3px solid ${borderColor}` : "none"}`,
        backgroundColor: fillColor,
        color: fontColor,
      }}
    >
      <pre className="colHeader">{header}</pre>
      <pre className="colInfo">{content}</pre>
    </div>
  );
}
