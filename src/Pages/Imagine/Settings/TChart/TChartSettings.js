import React from "react";
import "./TChartSettings.css";

export default function TChartSettings({
  data,
  setCount,
  setTCHeader,
  setTCContent,
}) {
  const columnArray = Array.from(
    { length: data.count },
    (_, index) => index + 1
  );

  function updateHeaderStateIndex(index, event) {
    const headerArray = [...data.tChart.header];
    headerArray[index] = event.target.value;
    setTCHeader(headerArray);
  }

  function updateContentStateIndex(index, event) {
    const textArray = [...data.tChart.content];
    textArray[index] = event.target.value;
    setTCContent(textArray);
  }
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
      <>
        {columnArray.map((item, index) => (
          <div className="tChartEditDiv">
            <input
              className="sbInput"
              type="text"
              value={data.tChart.header[index]}
              onChange={(event) => updateHeaderStateIndex(index, event)}
              placeholder={`Header of Column ${index + 1}`}
            />
            <textarea
              value={data.tChart.content[index]}
              onChange={(event) => updateContentStateIndex(index, event)}
              className="sbTextArea"
              placeholder={`Content of Column ${index + 1}`}
            />
          </div>
        ))}
      </>
    </>
  );
}
