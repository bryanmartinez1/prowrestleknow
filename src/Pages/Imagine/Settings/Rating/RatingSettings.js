import React from "react";
import Rating from "../../ImagineCreator/Rating/Rating";

export default function RatingSettings({ count, setCount, options, data }) {
  return (
    <>
      <input
        type="number"
        min={1}
        max={15}
        value={count}
        onChange={(event) => setCount(event.target.value)}
        className="chartTitleInput"
        placeholder="Input the amount of Stars"
      />
      <p>
        *** The most stars you cans display is 15 and the least amount of stars
        you can display is 1
      </p>
      <p>
        **** Downlaoding currently has a bug where it doesnt display shape as
        star, we are working to fix this issue
      </p>
      <div className="renderRatings">
        <Rating options={options} data={data} />
      </div>
    </>
  );
}
