import React from "react";
import "./StoryBoard.css";
import StoryBox from "../../../../Components/StoryBox/StoryBox";

export default function StoryBoard({ data, options }) {
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

  return (
    <div className="home">
      <div className="smTitle" style={{ textAlign: options.headerAlign }}>
        {options.title}
      </div>
      <div className="smAuthor" style={{ textAlign: options.headerAlign }}>
        {options.author}
      </div>
      <div className="storyBoxContainer">
        {boardCountArray.map((item, index) => (
          <StoryBox
            header={data.storyBoard.headers[index]}
            text={data.storyBoard.texts[index]}
            image={data.storyBoard.images[index]}
            key={index}
            fillColor={
              options.backgroundColor[index % options.backgroundColor.length]
            }
            borderColor={
              options.borderColor[index % options.borderColor.length]
            }
          />
        ))}
      </div>
    </div>
  );
}
