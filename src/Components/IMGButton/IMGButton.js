import React from "react";
import HoverText from "../HoverText/HoverText";
import "./IMGButton.css";

export default function IMGButton({ src, imgFunction, alt }) {
  return (
    <button className="imgButton" onClick={imgFunction}>
      <img className="image" src={src} alt={alt} />
    </button>
  );
}
