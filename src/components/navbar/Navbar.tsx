import React from "react";
import "./navbar.css";
import ImgButton from "../imgButton/imgButton";
import search from "../../icons/search.svg";
import database from "../../icons/database.svg";
import visualize from "../../icons/pie-chart.svg";
import imagine from "../../icons/pen-tool.svg";
import help from "../../icons/help-circle.svg";
import user from "../../icons/user.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-title" onClick={() => navigate("/")}>
        ProWrestleKnow
      </div>
      <div className="navbar-buttons">
        <ImgButton
          imageSrc={search}
          altText="Search"
          width={40}
          height={50}
          onClick={() => navigate("/search")}
        />
        <ImgButton
          imageSrc={database}
          altText="Database"
          width={40}
          height={50}
          onClick={() => navigate("/database")}
        />
        <ImgButton
          imageSrc={visualize}
          altText="Visualize"
          width={40}
          height={50}
          onClick={() => navigate("/visualize")}
        />
        <ImgButton
          imageSrc={imagine}
          altText="Imagine"
          width={40}
          height={50}
          onClick={() => navigate("/imagine")}
        />
        <ImgButton
          imageSrc={help}
          altText="Help"
          width={40}
          height={50}
          onClick={() => navigate("/help")}
        />
        <ImgButton
          imageSrc={user}
          altText="User"
          width={40}
          height={50}
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Navbar;
