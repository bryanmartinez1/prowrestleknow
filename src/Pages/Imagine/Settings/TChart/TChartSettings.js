import React from "react";

export default function TChartSettings({ count, setCount }) {
  if (data.tchart.columnCount <= 0) {
    data.starsCount = 1;
  }

  if (data.tchart.columnCount >= 16) {
    data.starsCount = 15;
  }
  const columnCountArray = Array.from(
    { length: data.tchart.columnCount },
    (_, index) => index + 1
  );
  return (
    <>
      <input
        type="number"
        min={2}
        max={5}
        value={count}
        onChange={(event) => setCount(event.target.value)}
        className="chartTitleInput"
        placeholder="Input the amount of Stars"
      />
      <p>
        *** The most columns a T Chart can currently have is 5 and the minimum
        is 2
      </p>
      <input
        type="number"
        min={2}
        max={5}
        value={count}
        onChange={(event) => setCount(event.target.value)}
        className="chartTitleInput"
        placeholder="Input the amount of Stars"
      />
    </>
  );
}
