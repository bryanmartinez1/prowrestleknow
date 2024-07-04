import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import IMGButton from "../IMGButton/IMGButton";
import search from "../../Images/search_icon.png";
import controller from "../../Images/controller.png";
import compare from "../../Images/compare.png";
import graph from "../../Images/chart.png";
import info from "../../Images/info.png";
import imagine from "../../Images/create.png";
import HoverText from "../HoverText/HoverText";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <button className="homeTitle" onClick={() => navigate("/")}>
        ProWrestleKnow
      </button>
      <div className="content">
        <HoverText
          parent={
            <IMGButton
              src={search}
              alt="Search"
              imgFunction={() => navigate("/search")}
            />
          }
          preview="Search"
        />
        <HoverText
          parent={
            <IMGButton
              src={compare}
              alt="Compare"
              imgFunction={() => navigate("/compare")}
            />
          }
          preview="Compare"
        />
        <HoverText
          parent={
            <IMGButton
              src={graph}
              alt="Graph"
              imgFunction={() => navigate("/graph")}
            />
          }
          preview="Graph"
        />
        <HoverText
          parent={
            <IMGButton
              src={imagine}
              alt="Imagine"
              imgFunction={() => navigate("/imagine")}
            />
          }
          preview="Imagine"
        />
        <HoverText
          parent={
            <IMGButton
              src={controller}
              alt="Games"
              imgFunction={() => navigate("/games")}
            />
          }
          preview="Games"
        />
        <HoverText
          parent={
            <IMGButton
              src={info}
              alt="Information"
              imgFunction={() => navigate("/information")}
            />
          }
          preview="Information"
        />
      </div>
    </div>
  );
}
