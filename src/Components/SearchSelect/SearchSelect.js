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
          selected === "brand" ? "selectedOption" : ""
        }`}
        onClick={() => {
          setSelect("brand");
        }}
      >
        Brand
      </button>
      <button
        className={`selectButton ${selected === "ppv" ? "selectedOption" : ""}`}
        onClick={() => {
          setSelect("ppv");
        }}
      >
        PPV
      </button>
    </div>
  );
}
