import React, { useState } from "react";
import "./Compare.css";
import SearchSelect from "../../Components/SearchSelect/SearchSelect";

export default function Compare() {
  const [selectCompare, setSelectCompare] = useState("wrestler");
  return (
    <div className="compare">
      <SearchSelect setSelect={setSelectCompare} selected={selectCompare} />
      {selectCompare}
    </div>
  );
}
