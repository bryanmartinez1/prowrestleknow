import React, { useState } from "react";
import "./visualize.css";
import Sidebar from "../../components/sidebar/Sidebar";
import sidebar_options from "./options.json";
import table from "../../assets/icons/visualize/table.svg";
import bar_chart from "../../assets/icons/visualize/bar-chart-2.svg";
import pie_chart from "../../assets/icons/visualize/pie-chart.svg";
import timeline from "../../assets/icons/visualize/activity.svg";

export default function Visualize() {
  const [visualizeSelected, setVisualizeSelected] = useState<string>("Table");

  const options_images = [
    table,
    bar_chart,
    pie_chart,
    timeline,
    bar_chart,
    pie_chart,
  ];
  return (
    <div className="visualize-page" data-testid="visualize">
      <Sidebar
        selected={visualizeSelected}
        setSelected={setVisualizeSelected}
        options={sidebar_options}
        image_array={options_images}
      />
      {visualizeSelected}
    </div>
  );
}
