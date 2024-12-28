import React from "react";
import "./home.css";
import bgImage from "../../assets/icons/pwk/home-page.jpg";

export default function Home() {
  return (
    <div className="home-page">
      <img src={bgImage} className="home-image" alt="Home Background" />
      <div>Home</div>
    </div>
  );
}
