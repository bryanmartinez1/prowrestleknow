import React from "react";
import "./IMGButton.css";

export default function IMGButton({ src, imgFunction, alt }) {
  return (
    <button className="imgButton" onClick={imgFunction}>
      <img className="image" src={src} alt={alt} />
    </button>
  );
}
