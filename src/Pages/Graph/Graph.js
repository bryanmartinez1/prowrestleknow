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
  registerables,
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
  headerAlignment,
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
  ArcElement,
  ...registerables
);

export default function Graph() {
  const [chartSelect, setChartSelect] = useState("wrestler");
  const [chartType, setChartType] = useState([]);
  const [chartTitle, setChartTitle] = useState("");
  const [chartSubtitle, setChartSubtitle] = useState("");
  const [xLabel, setXLabel] = useState("");
  const [yLabel, setYLabel] = useState("");
  const [fillColor, setSelectedFillColors] = useState([]);
  const [borderColor, setBorderColor] = useState([]);
  const [headerAlign, setHeaderAlign] = useState(["center"]);

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
        align: headerAlign[0],
      },
      title: {
        display: true,
        text: chartTitle,
        font: {
          size: 24,
          family: "Lexend",
        },
        color: "black",
        position: "top",
        align: headerAlign[0],
      },
      subtitle: {
        display: true,
        text: chartSubtitle,
        font: {
          size: 18,
          family: "Lexend",
        },
        color: "black",
        align: headerAlign[0],
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

  //  https://stackoverflow.com/questions/42585861/chart-js-increase-spacing-between-legend-and-chart
  //  User: Nidhi Shah, Jan 16, 2023 at 6:44
  const plugin = {
    beforeInit: function (chart) {
      const originalFit = chart.legend.fit;
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)();
        this.height += 10;
      };
    },
  };

  const renderChart = () => {
    switch (chartType[0]) {
      case "Pie":
        return <Pie data={data} options={options} plugins={[plugin]} />;
      case "Doughnut":
        return <Doughnut data={data} options={options} plugins={[plugin]} />;
      case "Scatter":
        return <Scatter data={data} options={options} plugins={[plugin]} />;
      case "Vertical Bar":
        return <Bar data={data} options={options} plugins={[plugin]} />;
      case "Horizontal Bar":
        return <Bar data={data} options={options} plugins={[plugin]} />;
      case "Line":
        return <Line data={data} options={options} plugins={[plugin]} />;
      case "Table":
        return <Table data={data} options={options} plugins={[plugin]} />;
      case "Timeline":
        return <Timeline data={data} options={options} plugins={[plugin]} />;
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
              <input
                className="chartTitleInput"
                placeholder="Input Chart Subitle"
                value={chartSubtitle}
                type="text"
                onChange={(event) => setChartSubtitle(event.target.value)}
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
                <Multiselect
                  placeholder="Select Header Alignment"
                  isObject={false}
                  onRemove={(event) => {
                    setHeaderAlign(event);
                  }}
                  onSelect={(event) => {
                    setHeaderAlign(event);
                  }}
                  options={headerAlignment}
                  selectedValues={headerAlign}
                  showCheckbox
                  hideSelectedList
                  style={multiSelectStyle}
                  selectionLimit={1}
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
