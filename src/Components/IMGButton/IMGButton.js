import React from "react";
import "./IMGButton.css";
import { useNavigate } from "react-router-dom";

export default function IMGButton({ src, route, alt }) {
  const navigate = useNavigate();
  return (
    <button className="imgButton" onClick={() => navigate(route)}>
      <img className="image" src={src} alt={alt} />
    </button>
  );
}
