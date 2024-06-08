import React, { useState, useEffect, useRef } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./DataGetter.css";

export default function DataGetter({ selector, data, options }) {
  const [range, setRange] = useState(["All"]);
  const charts = ["All", "Range", "Specific"];

  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const multiSelectStyle = {
    multiselectContainer: {
      width: width / 2,
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
      width: "100%",
      height: "35px",
      color: "black",
      fontSize: "20px",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <div className="rangeDiv" ref={divRef}>
        <Multiselect
          placeholder={range[0]}
          isObject={false}
          onRemove={(event) => {
            setRange(event);
          }}
          onSelect={(event) => {
            setRange(event);
          }}
          options={charts}
          selectedValues={range}
          showCheckbox
          hideSelectedList
          selectionLimit={1}
          style={multiSelectStyle}
        />
        {range[0] === "Range" && (
          <input className="rangeInput" type="number" min={0} />
        )}
      </div>
      {selector}
    </div>
  );
}
