import React from "react";
import "./Rating.css";
import Stars from "../../../../Components/Stars/Stars";

export default function Rating({ data, options }) {
  if (data.ratings.starsCount <= 0) {
    data.starsCount = 1;
  }

  if (data.ratings.starsCount >= 16) {
    data.starsCount = 15;
  }
  const starsCountArray = Array.from(
    { length: data.ratings.starsCount },
    (_, index) => index + 1
  );

  return (
    <div className="RatingContainer">
      <div className="title"> {options.title}</div>
      <div className="author"> {options.author}</div>
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
