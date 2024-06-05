import React from "react";
import "./Timeline.css";

export default function Timeline({ data, options }) {
  //  backgroundColor:  data.datasets.backgroundColor
  //  borderColor:      data.datasets.borderColor

  return (
    <div className="TimelineContainer">
      <div>{options.plugins.title.text}</div>
      <>Timelines</>
    </div>
  );
}
