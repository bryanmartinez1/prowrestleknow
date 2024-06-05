import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./Imagine.css";

const multiSelectStyle = {
  multiselectContainer: {
    width: "100%",
    height: "50px",
    backgroundColor: "whitesmoke",
  },
  searchBox: {
    width: "100%",
    height: "50px",
  },
  optionContainer: {
    backgroundColor: "whitesmoke",
  },
  inputField: {
    width: "90%",
    height: "35px",
    color: "whitesmoke",
    fontSize: "20px",
    overflow: "hidden",
  },
};

export default function Imagine() {
  const [imagine, setImagine] = useState(["Story Board"]);
  const imagineOptions = [
    "Story Board",
    "Idea Wheel",
    "T-Chart",
    "Venn Diagram",
    "Concept Map",
    "Story Map",
    "Steal",
    "Taxonomies",
    "Flow Chart",
  ];

  return (
    <div className="create">
      <Multiselect
        placeholder={imagine[0]}
        isObject={false}
        onRemove={(event) => {
          setImagine(event);
        }}
        onSelect={(event) => {
          setImagine(event);
        }}
        options={imagineOptions}
        selectedValues={imagine}
        showCheckbox
        hideSelectedList
        style={multiSelectStyle}
        selectionLimit={1}
      />
    </div>
  );
}
