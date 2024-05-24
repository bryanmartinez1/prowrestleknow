import React from "react";
import "./Card.css";

export default function Card({ name, src }) {
  return (
    <div className="card">
      <img className="cardIMG" src={src} alt={name} />
      <div>{name}</div>
    </div>
  );
}
