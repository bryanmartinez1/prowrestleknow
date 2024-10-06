import React from "react";
import "./navbar.css";
import ImgButton from "../imgButton/imgButton";
import imagine from "../../icons/pen-tool.svg";
import visualize from "../../icons/pie-chart.svg";
import database from "../../icons/database.svg";
import user from "../../icons/user.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">ProWrestleKnow</div>
      <div className="navbar-buttons">
        <ImgButton
          imageSrc={database}
          altText="Database"
          width={50}
          height={50}
        />
        <ImgButton
          imageSrc={visualize}
          altText="Visualize"
          width={50}
          height={50}
        />
        <ImgButton
          imageSrc={imagine}
          altText="Imagine"
          width={50}
          height={50}
        />
        <ImgButton imageSrc={user} altText="User" width={50} height={50} />
      </div>
    </div>
  );
}

export default Navbar;
