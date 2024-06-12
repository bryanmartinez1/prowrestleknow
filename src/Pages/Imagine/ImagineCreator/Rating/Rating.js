import React from "react";
import "./Rating.css";
import Stars from "../../../../Components/Stars/Stars";

export default function Rating({ data, options }) {
  if (data.count <= 0) {
    data.count = 1;
  }

  if (data.count >= 16) {
    data.count = 15;
  }
  const starsCountArray = Array.from(
    { length: data.count },
    (_, index) => index + 1
  );

  return (
    <div className="RatingContainer">
      <div className="title" style={{ textAlign: options.headerAlign }}>
        {options.title}
      </div>
      <div className="author" style={{ textAlign: options.headerAlign }}>
        {options.author}
      </div>
      <div className="starContainer">
        {starsCountArray.map((item, index) => (
          <Stars
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
