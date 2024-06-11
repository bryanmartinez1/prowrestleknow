import React from "react";
import "./StoryBoardSettings.css";

export default function StoryBoardSettings({
  data,
  setHeaders,
  setTexts,
  setCount,
}) {
  if (data.count <= 0) {
    data.count = 1;
  }

  if (data.count >= 16) {
    data.count = 15;
  }
  const boardCountArray = Array.from(
    { length: data.count },
    (_, index) => index + 1
  );

  function updateHeaderStateIndex(index, event) {
    const headerArray = [...data.storyBoard.headers];
    headerArray[index] = event.target.value;
    setHeaders(headerArray);
  }

  function updateTextStateIndex(index, event) {
    const textArray = [...data.storyBoard.texts];
    textArray[index] = event.target.value;
    setTexts(textArray);
  }

  return (
    <div className="StoryBoardSettings">
      <input
        type="number"
        min={1}
        max={15}
        value={data.count}
        onChange={(event) => setCount(event.target.value)}
        className="chartTitleInput"
        placeholder="Input the Amount of Story Boxes"
      />
      {boardCountArray.map((item, index) => (
        <div className="storyBoardInfo" key={index}>
          <input
            className="sbInput"
            type="text"
            value={data.storyBoard.headers[index]}
            onChange={(event) => updateHeaderStateIndex(index, event)}
            placeholder={`Header of Storybox ${index + 1}`}
          />
          <textarea
            value={data.storyBoard.texts[index]}
            onChange={(event) => updateTextStateIndex(index, event)}
            className="sbTextArea"
            placeholder={`Header of Storybox ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
