import React, { useState } from "react";
import "./Chart.css";
import SearchSelect from "../../Components/SearchSelect/SearchSelect";
import { Bar, Pie, Doughnut, Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  ArcElement,
} from "chart.js";
import Multiselect from "multiselect-react-dropdown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
  Filler,
  ArcElement
);

export default function Chart() {
  const [chartSelect, setChartSelect] = useState("bar");
  const [chartTitle, setChartTitle] = useState("");
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [colors, setSelectedColors] = useState([
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "pink",
    "black",
    "white",
    "brown",
    "gray",
  ]);
  const [chart, setChart] = useState(["bar"]);
  const backgroundColors = [
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "pink",
    "black",
    "white",
    "brown",
    "gray",
  ];

  const charts = ["bar", "pie", "doughnut", "scatter"];

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: colors,
        borderColor: ["black"],
        borderWidth: 1,
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
        text: chartTitle,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: yLabel,
        },
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

  const renderChart = () => {
    switch (chartSelect) {
      case "pie":
        return <Pie data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      case "scatter":
        return <Scatter data={data} options={options} />;
      case "bar":
      default:
        return <Bar data={data} options={options} />;
    }
  };

  return (
    <div className="chart">
      <SearchSelect setSelect={setChartSelect} selected={chartSelect} />
      <input
        className="chartTitleInput"
        placeholder="Input Chart Title"
        type="text"
        onChange={(event) => setChartTitle(event.target.value)}
      />
      <div className="labelsDiv">
        <input
          className="labelInput"
          placeholder="Input X Label"
          type="text"
          onChange={(event) => setXLabel(event.target.value)}
        />
        <input
          className="labelInput"
          placeholder="Input Y Label"
          type="text"
          onChange={(event) => setYLabel(event.target.value)}
        />
      </div>
      <div className="multiSelectHolder">
        <Multiselect
          placeholder="Select Chart"
          isObject={false}
          onRemove={(event) => {
            setChart(event);
            setChartSelect(event[0]);
          }}
          onSelect={(event) => {
            setChart(event);
            setChartSelect(event[0]);
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
      <div className="chartDiv">{renderChart()}</div>
    </div>
  );
}
