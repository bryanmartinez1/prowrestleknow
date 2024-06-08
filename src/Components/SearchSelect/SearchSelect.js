import React from "react";
import "./SearchSelect.css";

export default function SearchSelect({ setSelect, selected }) {
  return (
    <div className="SearchSelect">
      <button
        className={`selectButton ${
          selected === "wrestler" ? "selectedOption" : ""
        }`}
        onClick={() => {
          setSelect("wrestler");
        }}
      >
        Wrestler
      </button>
      <button
        className={`selectButton ${
          selected === "title" ? "selectedOption" : ""
        }`}
        onClick={() => {
          setSelect("title");
        }}
      >
        Title
      </button>
      <button
        className={`selectButton ${
          selected === "company" ? "selectedOption" : ""
        }`}
        onClick={() => {
          setSelect("company");
        }}
      >
        Company
      </button>
      <button
        className={`selectButton ${
          selected === "team" ? "selectedOption" : ""
        }`}
        onClick={() => {
          setSelect("team");
        }}
      >
        Team
      </button>
      <button
        className={`selectButton ${
          selected === "show" ? "selectedOption" : ""
        }`}
        onClick={() => {
          setSelect("show");
        }}
      >
        Show
      </button>
    </div>
  );
}
