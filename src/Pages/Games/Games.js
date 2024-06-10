import React, { useState } from "react";
import "./Games.css";
import Multiselect from "multiselect-react-dropdown";

const graphSelectStyle = {
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
    color: "black",
    fontSize: "20px",
    overflow: "hidden",
  },
};

export default function Games() {
  const [chartType, setChartType] = useState(["Damien"]);
  const charts = [
    "Damien",
    "Kairi's Ship Sails",
    "Pac",
    "Chasing the Dragon",
    "Wrestle Economy",
    "Ring Breakker",
  ];

  return (
    <div className="games">
      <Multiselect
        placeholder={chartType[0]}
        isObject={false}
        onRemove={(event) => {
          setChartType(event);
        }}
        onSelect={(event) => {
          setChartType(event);
        }}
        options={charts}
        selectedValues={chartType}
        showCheckbox
        hideSelectedList
        style={graphSelectStyle}
        selectionLimit={1}
      />
    </div>
  );
}
