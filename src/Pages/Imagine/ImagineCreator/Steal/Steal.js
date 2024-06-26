import React from "react";
import STEALBox from "../../../../Components/STEALBox/STEALBox";

export default function Steal({ data, options }) {
  const stealArray = ["S", "T", "E", "A", "L"];
  return (
    <div className="home">
      <div className="smTitle" style={{ textAlign: options.headerAlign }}>
        {options.title}
      </div>
      <div className="smAuthor" style={{ textAlign: options.headerAlign }}>
        {options.author}
      </div>
      {stealArray.map((item, index) => (
        <STEALBox
          left={stealArray[index]}
          right={data.steal[index]}
          fillColor={
            options.backgroundColor[index % options.backgroundColor.length]
          }
          fontColor={options.fontColor[index % options.fontColor.length]}
          borderColor={options.borderColor[index % options.borderColor.length]}
          key={index}
        />
      ))}
    </div>
  );
}
