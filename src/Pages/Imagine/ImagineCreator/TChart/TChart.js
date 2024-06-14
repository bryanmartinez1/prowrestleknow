import React, { useState, useRef, useEffect } from "react";
import "./TChart.css";
import Column from "../../../../Components/Column/Column";

export default function TChart({ data, options }) {
  const [width, setWidth] = useState(0);
  const tChartRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (tChartRef.current) {
        setWidth(tChartRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const columnArray = Array.from(
    { length: data.count },
    (_, index) => index + 1
  );

  return (
    <div className="home" ref={tChartRef}>
      <div className="smTitle" style={{ textAlign: options.headerAlign }}>
        {options.title}
      </div>
      <div className="smAuthor" style={{ textAlign: options.headerAlign }}>
        {options.author}
      </div>
      <div style={{ width: width }} className="tChartHolder">
        {columnArray.map((item, index) => (
          <Column
            fillColor={
              options.backgroundColor[index % options.backgroundColor.length]
            }
            borderColor={
              options.borderColor[index % options.borderColor.length]
            }
            width={width / data.count}
            hasRightBorder={index !== data.count - 1 ? true : false}
            header={data.tChart.header[index]}
            content={data.tChart.content[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
