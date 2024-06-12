import React, { useCallback, useState } from "react";
import "./Graph.css";
import SearchSelect from "../../Components/SearchSelect/SearchSelect.js";
import downloadIMG from "../../Images/download.png";
import getDataIMG from "../../Images/get-data.png";
import settingsIMG from "../../Images/settings.png";
import IMGButton from "../../Components/IMGButton/IMGButton.js";
import { Bar, Pie, Doughnut, Scatter, Line } from "react-chartjs-2";
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
import Table from "./GraphCreator/Table/Table.js";
import Modal from "../../Components/Modal/Modal.js";
import Timeline from "./GraphCreator/Timeline/Timeline.js";
import DataGetter from "./DataGetter/DataGetter.js";
import {
  colors,
  graphSelectStyle,
  multiSelectStyle,
  chartsANDgraphs,
} from "../../Config/Options.js";
import { takeShot } from "../../Config/takeShot.js";

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

export default function Graph() {
  const [chartSelect, setChartSelect] = useState("wrestler");
  const [chartType, setChartType] = useState([]);
  const [chartTitle, setChartTitle] = useState("");
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [fillColor, setSelectedFillColors] = useState([]);
  const [borderColor, setBorderColor] = useState([]);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: fillColor,
        borderColor: borderColor,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: chartTitle,
        font: {
          size: 24,
        },
        color: "black",
      },
    },
    indexAxis: chartType[0] === "Horizontal Bar" ? "y" : "x",
    scales:
      chartType[0] === "Vertical Bar" ||
      chartType[0] === "Scatter" ||
      chartType[0] === "Line"
        ? {
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
          }
        : {},
  };

  const renderChart = () => {
    switch (chartType[0]) {
      case "Pie":
        return <Pie data={data} options={options} />;
      case "Doughnut":
        return <Doughnut data={data} options={options} />;
      case "Scatter":
        return <Scatter data={data} options={options} />;
      case "Vertical Bar":
        return <Bar data={data} options={options} />;
      case "Horizontal Bar":
        return <Bar data={data} options={options} />;
      case "Line":
        return <Line data={data} options={options} />;
      case "Table":
        return <Table data={data} options={options} />;
      case "Timeline":
        return <Timeline data={data} options={options} />;
      default:
        return <>Select a Chart Type</>;
    }
  };

  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);

  const settingsModalOpen = useCallback(() => {
    setSettingsModalOpen(true);
  }, []);

  const settingsModalClose = useCallback(() => {
    setSettingsModalOpen(false);
  }, []);

  const [isDataModalOpen, setDataModalOpen] = useState(false);

  const dataModalOpen = useCallback(() => {
    setDataModalOpen(true);
  }, []);

  const dataModalClose = useCallback(() => {
    setDataModalOpen(false);
  }, []);

  return (
    <div className="chart">
      <div className="chartSelectDiv">
        <Multiselect
          placeholder={chartType[0]}
          isObject={false}
          onRemove={(event) => {
            setChartType(event);
          }}
          onSelect={(event) => {
            setChartType(event);
          }}
          options={chartsANDgraphs}
          selectedValues={chartType}
          showCheckbox
          hideSelectedList
          style={graphSelectStyle}
          selectionLimit={1}
        />
      </div>
      <div className="graphButtons">
        <IMGButton
          src={getDataIMG}
          imgFunction={dataModalOpen}
          alt="Chart Data"
        />
        <IMGButton
          src={settingsIMG}
          imgFunction={settingsModalOpen}
          alt="Chart Settings"
        />
        <IMGButton
          src={downloadIMG}
          imgFunction={() => takeShot("chart", chartTitle)}
          alt="Download"
        />
      </div>

      <div className="chartDiv" id="chart">
        {renderChart()}
      </div>
      {isSettingsModalOpen && (
        <Modal
          closeModal={settingsModalClose}
          content={
            <>
              <input
                className="chartTitleInput"
                placeholder="Input Chart Title"
                value={chartTitle}
                type="text"
                onChange={(event) => setChartTitle(event.target.value)}
              />
              {chartType[0] === "Vertical Bar" ||
              chartType[0] === "Horizontal Bar" ||
              chartType[0] === "Scatter" ||
              chartType[0] === "Line" ? (
                <>
                  <input
                    className="chartTitleInput"
                    placeholder="Input X Label"
                    type="text"
                    value={xLabel}
                    onChange={(event) => setXLabel(event.target.value)}
                  />
                  <input
                    className="chartTitleInput"
                    placeholder="Input Y Label"
                    value={yLabel}
                    type="text"
                    onChange={(event) => setYLabel(event.target.value)}
                  />
                </>
              ) : (
                <></>
              )}
              <div className="rowMultiSelect">
                <Multiselect
                  placeholder="Select Fill Colors"
                  isObject={false}
                  onRemove={(event) => {
                    setSelectedFillColors(event);
                  }}
                  onSelect={(event) => {
                    setSelectedFillColors(event);
                  }}
                  options={colors}
                  selectedValues={fillColor}
                  showCheckbox
                  hideSelectedList
                  style={multiSelectStyle}
                />
                <Multiselect
                  placeholder="Select Border Colors"
                  isObject={false}
                  onRemove={(event) => {
                    setBorderColor(event);
                  }}
                  onSelect={(event) => {
                    setBorderColor(event);
                  }}
                  options={colors}
                  selectedValues={borderColor}
                  showCheckbox
                  hideSelectedList
                  style={multiSelectStyle}
                />
              </div>
              <div className="chartPreview">{renderChart()}</div>
            </>
          }
        />
      )}
      {isDataModalOpen && (
        <Modal
          closeModal={dataModalClose}
          content={
            <>
              <SearchSelect setSelect={setChartSelect} selected={chartSelect} />
              <div className="dataContent">
                <DataGetter selector={chartSelect} />
              </div>
              <div className="footerButons">
                <button className="updateButton">Update</button>
              </div>
            </>
          }
        />
      )}
    </div>
  );
}
