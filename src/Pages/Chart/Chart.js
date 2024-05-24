import React, { useState } from "react";
import "./Chart.css";
import SearchSelect from "../../Components/SearchSelect/SearchSelect";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Multiselect from "multiselect-react-dropdown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const [chartSelect, setChartSelect] = useState("wrestler");
  const [colors, setSelectedColors] = useState([
    "red",
    "blue",
    "gold",
    "lightgreen",
    "purple",
    "orange",
  ]);
  const [chart, setChart] = useState("bar");
  const backgroundColors = [
    "red",
    "blue",
    "gold",
    "lightgreen",
    "purple",
    "orange",
  ];

  const charts = ["bar", "pie", "doughnut", "polar area", "radar", "scatter"];

  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartSelect,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const multiSelectStyle = {
    multiselectContainer: {
      width: "200px",
      height: "50px",
      backgroundColor: "whitesmoke",
    },
    searchBox: {
      width: "200px",
      height: "50px",
    },
    optionContainer: {
      backgroundColor: "whitesmoke",
    },
    inputField: {
      width: "190px",
      height: "35px",
      color: "whitesmoke",
      fontSize: "20px",
      overflow: "hidden",
    },
  };

  return (
    <div className="chart">
      <SearchSelect setSelect={setChartSelect} selected={chartSelect} />
      <div className="multiSelectHolder">
        <Multiselect
          placeholder="Select Chart"
          isObject={false}
          onRemove={(event) => {
            setChart(event);
          }}
          onSelect={(event) => {
            setChart(event);
          }}
          options={charts}
          selectedValues={chart}
          showCheckbox
          hideSelectedList
          style={multiSelectStyle}
          selectionLimit={1}
        />
        <Multiselect
          placeholder="Select Colors"
          isObject={false}
          onRemove={(event) => {
            setSelectedColors(event);
          }}
          onSelect={(event) => {
            setSelectedColors(event);
          }}
          options={backgroundColors}
          selectedValues={colors}
          showCheckbox
          hideSelectedList
          style={multiSelectStyle}
        />
      </div>

      <Bar data={data} options={options} />
    </div>
  );
}
