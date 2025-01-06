import React, { useState } from "react";
import "./imagine.css";
import Sidebar from "../../components/sidebar/Sidebar";
import options from "./options.json";
import story_board from "../../assets/icons/imagine/book-open.svg";
import calendar from "../../assets/icons/imagine/calendar.svg";
import doc from "../../assets/icons/imagine/file-text.svg";
import story_map from "../../assets/icons/imagine/map.svg";
import character from "../../assets/icons/imagine/pen-tool.svg";
import title from "../../assets/icons/imagine/type.svg";
import Searchbar from "../../components/search/Searchbar";

export default function Imagine() {
  const [imagineSelected, setImagineSelected] = useState<string>("Story Board");
  const [indexSearch, setIndexSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setIndexSearch(result);
  };
  const options_images = [
    story_board,
    calendar,
    doc,
    story_map,
    character,
    title,
    character,
    title,
  ];
  return (
    <div className="imagine-page" data-testid="imagine">
      <Sidebar
        selected={imagineSelected}
        setSelected={setImagineSelected}
        options={options}
        image_array={options_images}
      />
      <div className="imagine-content">
        <Searchbar onSearch={handleSearch} />
      </div>
    </div>
  );
}
