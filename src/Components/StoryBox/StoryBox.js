import React from "react";
import "./StoryBox.css";
import placeholder from "../../Images/placeholder-image.png";

export default function StoryBox({
  header,
  text,
  image = "",
  borderColor = "black",
  fillColor = "whitesmoke",
  fontColor = "black",
}) {
  return (
    <div
      className="StoryBox"
      style={{
        borderColor: borderColor,
        backgroundColor: fillColor,
        color: fontColor,
      }}
    >
      <div className="storyBoxHeader">{header}</div>
      <div className="storyBoxImageDiv">
        <img
          className="storyBoxImage"
          alt="StoryBox"
          src={image === "" ? placeholder : image}
        />
      </div>
      <pre className="storyBoxPre" style={{ borderColor: borderColor }}>
        {text}
      </pre>
    </div>
  );
}
