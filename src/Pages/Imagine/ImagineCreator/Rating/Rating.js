import React from "react";
import "./Rating.css";
import Stars from "../../../../Components/Stars/Stars";

export default function Rating({ data, options }) {
  if (data.starsCount <= 0) {
    data.starsCount = 1;
  }

  if (data.starsCount >= 16) {
    data.starsCount = 15;
  }
  const starsCountArray = Array.from(
    { length: data.starsCount },
    (_, index) => index + 1
  );

  return (
    <div className="RatingContainer">
      {options.title}
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
