import React from "react";
import "./StoryBox.css";
import placeholder from "../../Images/placeholder-image.png";

export default function StoryBox({
  header,
  text,
  borderColor = "black",
  fillColor = "whitesmoke",
}) {
  return (
    <div
      className="StoryBox"
      style={{ borderColor: borderColor, backgroundColor: fillColor }}
    >
      <div className="storyBoxHeader">{header}</div>
      <img className="storyBoxImage" alt="StoryBox" src={placeholder} />
      <pre className="storyBoxPre" style={{ borderColor: borderColor }}>
        {text}
      </pre>
    </div>
  );
}
