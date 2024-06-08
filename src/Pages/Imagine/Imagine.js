import React, { useState } from "react";
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
  const [imagine, setImagine] = useState(["Concept Map"]);
  const imagineOptions = [
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
          // imgFunction={dataModalOpen}
          alt="Chart Data"
        />
        <IMGButton
          src={settingsIMG}
          // imgFunction={settingsModalOpen}
          alt="Chart Settings"
        />
        <IMGButton src={downloadIMG} imgFunction={takeShot} alt="Download" />
      </div>

      <div className="" id="imagine">
        {renderImagine()}
      </div>
    </div>
  );
}
