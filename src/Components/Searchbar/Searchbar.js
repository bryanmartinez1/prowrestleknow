import React from "react";
import search_icon from "../../Images/search_icon.png";
import "./Searchbar.css";

export default function Searchbar({ setSearch }) {
  async function newSearch(event) {
    if (event.key === "Enter") {
      console.log("Searched: " + document.getElementById("searchInput").value);
      setSearch(document.getElementById("searchInput").value.toLowerCase());
    }
  }

  return (
    <div className="Searchbar">
      <img className="searchIMG" src={search_icon} alt="Search"/>
      <input
        className="searchInput"
        onKeyDown={(key) => newSearch(key)}
        id="searchInput"
      />
    </div>
  );
}
