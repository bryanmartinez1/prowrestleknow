import React from "react";

export default function VennDiagram({ data, options }) {
  return (
    <div className="home">
      <div className="smTitle" style={{ textAlign: options.headerAlign }}>
        {options.title}
      </div>
      <div className="smAuthor" style={{ textAlign: options.headerAlign }}>
        {options.author}
      </div>
      Venn Diagram
    </div>
  );
}
