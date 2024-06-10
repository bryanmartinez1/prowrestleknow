import React from "react";
import STEALBox from "../../../../Components/STEALBox/STEALBox";

export default function Steal({ data, options }) {
  return (
    <div className="home">
      <div className="smTitle"> {options.title}</div>
      <div className="smAuthor"> {options.author}</div>
      <STEALBox
        left="S"
        right={data.steal.s}
        fillColor={options.backgroundColor[0 % options.backgroundColor.length]}
        borderColor={options.borderColor[0 % options.borderColor.length]}
      />
      <STEALBox
        left="T"
        right={data.steal.t}
        fillColor={options.backgroundColor[1 % options.backgroundColor.length]}
        borderColor={options.borderColor[1 % options.borderColor.length]}
      />
      <STEALBox
        left="E"
        right={data.steal.e}
        fillColor={options.backgroundColor[2 % options.backgroundColor.length]}
        borderColor={options.borderColor[2 % options.borderColor.length]}
      />
      <STEALBox
        left="A"
        right={data.steal.a}
        fillColor={options.backgroundColor[3 % options.backgroundColor.length]}
        borderColor={options.borderColor[3 % options.borderColor.length]}
      />
      <STEALBox
        left="L"
        right={data.steal.l}
        fillColor={options.backgroundColor[4 % options.backgroundColor.length]}
        borderColor={options.borderColor[4 % options.borderColor.length]}
      />
    </div>
  );
}
