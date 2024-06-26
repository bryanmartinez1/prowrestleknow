import React, { useState, useCallback } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./Imagine.css";
import StoryBoard from "./ImagineCreator/StoryBoard/StoryBoard";
import TChart from "./ImagineCreator/TChart/TChart";
import StoryMap from "./ImagineCreator/StoryMap/StoryMap";
import Steal from "./ImagineCreator/Steal/Steal";
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
import {
  colors,
  imagineOptions,
  graphSelectStyle,
  headerAlignment,
} from "../../Config/Options";
import { takeShot } from "../../Config/takeShot";
import TChartSettings from "./Settings/TChart/TChartSettings";

export default function Imagine() {
  const [imagineTitle, setImagineTitle] = useState("");
  const [imagineAuthor, setImagineAuthor] = useState("");
  const [imagine, setImagine] = useState([]);

  const [backgroundColor, setBackgroundColor] = useState([]);
  const [fontColor, setFontColor] = useState([]);
  const [borderColor, setBorderColor] = useState([]);
  const [headerAlign, setHeaderAlign] = useState(["center"]);

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

  // Ratings, T Chart, Story Board, Story Map, STEAL
  const [count, setCount] = useState(2);
  const [steal, setSTEAL] = useState(Array(5).fill(""));
  const [storyMap, setStoryMap] = useState(Array(8).fill(""));
  const [sbHeaders, setSBHeaders] = useState(Array(15).fill(""));
  const [sbTexts, setSBTexts] = useState(Array(15).fill(""));
  const [sbImages, setSBImages] = useState(Array(15).fill(""));
  const [tcHeader, setTCHeader] = useState(Array(15).fill(""));
  const [tcContent, setTCContent] = useState(Array(15).fill(""));

  const data = {
    count: count,
    steal: steal,
    storyBoard: {
      headers: sbHeaders,
      texts: sbTexts,
      images: sbImages,
    },
    storyMaps: storyMap,
    tChart: {
      header: tcHeader,
      content: tcContent,
    },
  };

  const options = {
    title: imagineTitle,
    author: imagineAuthor,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    fontColor: fontColor,
    headerAlign: headerAlign[0],
  };

  const renderImagine = () => {
    switch (imagine[0]) {
      case "Story Board":
        return <StoryBoard options={options} data={data} />;
      case "T-Chart":
        return <TChart options={options} data={data} />;
      case "Story Map":
        return <StoryMap options={options} data={data} />;
      case "Rating":
        return <Rating options={options} data={data} />;
      case "Steal":
        return <Steal options={options} data={data} />;
      default:
        return <>Select a Imagine Type</>;
    }
  };

  const renderDataSettings = () => {
    switch (imagine[0]) {
      case "Story Map":
        return <StoryMapSettings setStoryMap={setStoryMap} data={data} />;
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
            setImages={setSBImages}
          />
        );
      case "T-Chart":
        return (
          <TChartSettings
            setCount={setCount}
            data={data}
            setTCHeader={setTCHeader}
            setTCContent={setTCContent}
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
        style={graphSelectStyle}
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
        <IMGButton
          src={downloadIMG}
          imgFunction={() => takeShot("imagine", imagineTitle)}
          alt="Download"
        />
      </div>
      <div className="imagineRender" id="imagine">
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
                placeholder="Title"
                value={imagineTitle}
                type="text"
                onChange={(event) => setImagineTitle(event.target.value)}
              />
              <input
                className="chartTitleInput"
                placeholder="Subtitle"
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
                  style={graphSelectStyle}
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
                  style={graphSelectStyle}
                />
                <Multiselect
                  placeholder="Select Font Colors"
                  isObject={false}
                  onRemove={(event) => {
                    setFontColor(event);
                  }}
                  onSelect={(event) => {
                    setFontColor(event);
                  }}
                  options={colors}
                  selectedValues={fontColor}
                  showCheckbox
                  hideSelectedList
                  style={graphSelectStyle}
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
                  style={graphSelectStyle}
                  selectionLimit={1}
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
