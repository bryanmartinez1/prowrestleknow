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
import StoryMapSettings from "./Settings/StoryMap/StoryMapSettings";
import SteelSettings from "./Settings/STEAL/STEALSettings";
import StoryBoardSettings from "./Settings/StoryBoardSettings/StoryBoardSettings";

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
  const [imagineAuthor, setImagineAuthor] = useState("");
  const [imagine, setImagine] = useState([]);
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

  const [backgroundColor, setBackgroundColor] = useState([]);
  const [borderColor, setBorderColor] = useState([]);

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
      link.download = `${imagineTitle}.png`;
      link.click();
    });
  }
  // Ratings T Chart, Story Board
  const [count, setCount] = useState(5);
  //  STEAL
  const [steal, setSTEAL] = useState(Array(5).fill(""));
  // Story Map
  const [smCharacters, setSMCharacters] = useState("");
  const [smSettings, setSMSettings] = useState("");
  const [smBeginning, setSMBeginning] = useState("");
  const [smMiddle, setSMMiddle] = useState("");
  const [smEnd, setSMEnd] = useState("");
  const [smConflict, setSMConflict] = useState("");
  const [smResolution, setSMResolution] = useState("");
  const [smTheme, setSMTheme] = useState("");
  const [sbHeaders, setSBHeaders] = useState(Array(15).fill(""));
  const [sbTexts, setSBTexts] = useState(Array(15).fill(""));

  const data = {
    count: count,
    storyBoard: {
      headers: sbHeaders,
      texts: sbTexts,
    },
    storyMap: {
      characters: smCharacters,
      settings: smSettings,
      beginning: smBeginning,
      middle: smMiddle,
      end: smEnd,
      conflict: smConflict,
      resolution: smResolution,
      theme: smTheme,
    },
    steals: steal,
  };

  const options = {
    title: imagineTitle,
    author: imagineAuthor,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  };

  const renderImagine = () => {
    switch (imagine[0]) {
      case "Story Board":
        return <StoryBoard options={options} data={data} />;
      case "Idea Wheel":
        return <IdeaWheel options={options} data={data} />;
      case "T-Chart":
        return <TChart options={options} data={data} />;
      case "Venn Diagram":
        return <VennDiagram options={options} data={data} />;
      case "Concept Map":
        return <ConceptMap options={options} data={data} />;
      case "Story Map":
        return <StoryMap options={options} data={data} />;
      case "Rating":
        return <Rating options={options} data={data} />;
      case "Steal":
        return <Steal options={options} data={data} />;
      case "Taxonomies":
        return <Taxonomies options={options} data={data} />;
      case "Flow Chart":
        return <Flowchart options={options} data={data} />;
      default:
        return <>Select a Imagine Type</>;
    }
  };

  const renderDataSettings = () => {
    switch (imagine[0]) {
      case "Story Map":
        return (
          <StoryMapSettings
            setCharacters={setSMCharacters}
            setSetting={setSMSettings}
            setBeginning={setSMBeginning}
            setMiddle={setSMMiddle}
            setEnd={setSMEnd}
            setConflict={setSMConflict}
            setResolution={setSMResolution}
            setTheme={setSMTheme}
            data={data}
          />
        );
      case "Rating":
        return (
          <RatingSettings
            count={count}
            setCount={setCount}
            options={options}
            data={data}
          />
        );
      case "Steal":
        return <SteelSettings data={data} setSTEAL={setSTEAL} />;
      case "Story Board":
        return (
          <StoryBoardSettings
            data={data}
            setHeaders={setSBHeaders}
            setTexts={setSBTexts}
            setCount={setCount}
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
              <input
                className="chartTitleInput"
                placeholder="Input Imagine Author"
                value={imagineAuthor}
                type="text"
                onChange={(event) => setImagineAuthor(event.target.value)}
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
