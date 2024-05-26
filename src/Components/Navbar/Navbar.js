import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import IMGButton from "../IMGButton/IMGButton";
import search from "../../Images/search_icon.png";
import controller from "../../Images/controller.png";
import compare from "../../Images/compare.png";
import chart from "../../Images/chart.png";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <button className="homeTitle" onClick={() => navigate("/")}>
        ProWrestleKnow
      </button>
      <div className="content">
        <IMGButton
          src={search}
          alt="Search"
          imgFunction={() => navigate("/search")}
        />
        <IMGButton
          src={compare}
          alt="Compare"
          imgFunction={() => navigate("/compare")}
        />
        <IMGButton
          src={chart}
          alt="Chart"
          imgFunction={() => navigate("/chart")}
        />
        <IMGButton
          src={controller}
          alt="Games"
          imgFunction={() => navigate("/games")}
        />
      </div>
    </div>
  );
}
