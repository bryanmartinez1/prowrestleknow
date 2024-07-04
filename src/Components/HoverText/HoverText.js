import React from "react";
import "./HoverText.css";

export default function HoverText({ preview, parent }) {
  return (
    <div className="HoverText">
      <div>{parent}</div>
      <div class="preview">{preview}</div>
    </div>
  );
}
