import React from "react";
import "./IMGButton.css";
import { useNavigate } from "react-router-dom";

export default function IMGButton({ src, imgFunction, alt }) {
  const navigate = useNavigate();
  return (
    <button className="imgButton" onClick={imgFunction}>
      <img className="image" src={src} alt={alt} />
    </button>
  );
}
