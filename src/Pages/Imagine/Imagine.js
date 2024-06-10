import React, { useState, useCallback } from "react";
import Multiselect from "multiselect-react-dropdown";
import html2canvas from "html2canvas";
import "./Imagine.css";
import StoryBoard from "./ImagineCreator/StoryBoard/StoryBoard";
import IdeaWheel from "./ImagineCreator/IdeaWheel/IdeaWheel";
import TChart from "./ImagineCreator/TChart/TChart";
import VennDiagram from "./ImagineCreator/VennDiagram/VennDiagram";
import ConceptMap from "./ImagineCreator/ConceptMap/ConceptMap";
import StoryMap from "./ImagineCreator/StoryMap/StoryMap";
import Steal from "./ImagineCreator/Steal/Steal";
import Taxonomies from "./ImagineCreator/Taxonomies/Taxonomies";
import Flowchart from "./ImagineCreator/Flowchart/Flowchart";
import IMGButton from "../../Components/IMGButton/IMGButton";
import downloadIMG from "../../Images/download.png";
import getDataIMG from "../../Images/get-data.png";
import settingsIMG from "../../Images/settings.png";
import Rating from "./ImagineCreator/Rating/Rating";
import Modal from "../../Components/Modal/Modal";
import RatingSettings from "./Settings/Rating/RatingSettings";

const multiSelectStyle = {
  multiselectContainer: {
    width: "100%",
    height: "50px",
    backgroundColor: "whitesmoke",
  },
  searchBox: {
    width: "100%",
    height: "50px",
  },
  optionContainer: {
    backgroundColor: "whitesmoke",
  },
  inputField: {
    width: "90%",
    height: "35px",
    color: "whitesmoke",
    fontSize: "20px",
    overflow: "hidden",
  },
};

export default function Imagine() {
  const [imagineTitle, setImagineTitle] = useState("");
  const [imagine, setImagine] = useState(["Rating"]);
  const imagineOptions = [
    "Rating",
    "Concept Map",
    "Flow Chart",
    "Idea Wheel",
    "Steal",
    "Story Map",
    "T-Chart",
    "Taxonomies",
    "Venn Diagram",
    "Story Board",
  ];

  const [backgroundColor, setBackgroundColor] = useState(["black"]);
  const [borderColor, setBorderColor] = useState(["black"]);

  const colors = [
    "black",
    "white",
    "red",
    "blue",
    "yellow",
    "green",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
    "lime",
    "steelblue",
    "deeppink",
    "crimson",
    "gold",
    "salmon",
    "tomato",
    "tan",
    "teal",
    "lavender",
  ];

  //          SETTINGS
  //            MODAL
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const settingsModalOpen = useCallback(() => {
    setSettingsModalOpen(true);
  }, []);
  const settingsModalClose = useCallback(() => {
    setSettingsModalOpen(false);
  }, []);

  //            DATA
  //            MODAL
  const [isDataModalOpen, setDataModalOpen] = useState(false);
  const dataModalOpen = useCallback(() => {
    setDataModalOpen(true);
  }, []);
  const dataModalClose = useCallback(() => {
    setDataModalOpen(false);
  }, []);

  function takeShot() {
    let div = document.getElementById("imagine");
    html2canvas(div).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "chart.png";
      link.click();
    });
  }

  const [starCount, setStarCount] = useState(5);

  const data = {
    starsCount: starCount,
  };

  const options = {
    title: imagineTitle,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  };

  const renderImagine = () => {
    switch (imagine[0]) {
      case "Story Board":
        return <StoryBoard />;
      case "Idea Wheel":
        return <IdeaWheel />;
      case "T-Chart":
        return <TChart />;
      case "Venn Diagram":
        return <VennDiagram />;
      case "Concept Map":
        return <ConceptMap />;
      case "Story Map":
        return <StoryMap />;
      case "Rating":
        return <Rating options={options} data={data} />;
      case "Steal":
        return <Steal />;
      case "Taxonomies":
        return <Taxonomies />;
      case "Flow Chart":
        return <Flowchart />;
      default:
        return <>Select a Imagine Type</>;
    }
  };

  const renderDataSettings = () => {
    switch (imagine[0]) {
      case "Rating":
        return (
          <RatingSettings
            count={starCount}
            setCount={setStarCount}
            options={options}
            data={data}
          />
        );
      default:
        return <>Select a Imagine Type</>;
    }
  };

  return (
    <div className="imagine">
      <Multiselect
        placeholder={imagine[0]}
        isObject={false}
        onRemove={(event) => {
          setImagine(event);
        }}
        onSelect={(event) => {
          setImagine(event);
        }}
        options={imagineOptions}
        selectedValues={imagine}
        showCheckbox
        hideSelectedList
        style={multiSelectStyle}
        selectionLimit={1}
      />
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
        <IMGButton src={downloadIMG} imgFunction={takeShot} alt="Download" />
      </div>
      <div className="" id="imagine">
        {renderImagine()}
      </div>
      {isDataModalOpen && (
        <Modal
          closeModal={dataModalClose}
          content={<>{renderDataSettings()}</>}
        />
      )}
      {isSettingsModalOpen && (
        <Modal
          closeModal={settingsModalClose}
          content={
            <>
              <input
                className="chartTitleInput"
                placeholder="Input Imagine Title"
                value={imagineTitle}
                type="text"
                onChange={(event) => setImagineTitle(event.target.value)}
              />
              <div className="rowMultiSelect">
                <Multiselect
                  placeholder="Select Fill Colors"
                  isObject={false}
                  onRemove={(event) => {
                    setBackgroundColor(event);
                  }}
                  onSelect={(event) => {
                    setBackgroundColor(event);
                  }}
                  options={colors}
                  selectedValues={backgroundColor}
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
              <div> {renderImagine()}</div>
            </>
          }
        />
      )}
    </div>
  );
}
