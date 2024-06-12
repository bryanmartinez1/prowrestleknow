import React from "react";

export default function TChartSettings({ setCount, setTChart, data }) {
  return (
    <>
      <input
        type="number"
        min={1}
        max={15}
        value={data.count}
        onChange={(event) => setCount(event.target.value)}
        className="chartTitleInput"
        placeholder="Input the amount of columns"
      />
      <p>
        *** The most columns a T Chart can currently have is 15 and the minimum
        is 2
      </p>
    </>
  );
}
