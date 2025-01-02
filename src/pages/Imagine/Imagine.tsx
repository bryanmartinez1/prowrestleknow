import React from "react";
import "./imagine.css";
import options from "./options.json";
import story_board from "../../assets/icons/imagine/book-open.svg";

import calendar from "../../assets/icons/imagine/calendar.svg";

import doc from "../../assets/icons/imagine/file-text.svg";

import story_map from "../../assets/icons/imagine/map.svg";

import character from "../../assets/icons/imagine/pen-tool.svg";

import title from "../../assets/icons/imagine/type.svg";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Imagine() {
  const options_images = [
    story_board,
    calendar,
    doc,
    story_map,
    character,
    title,
  ];
  return (
    <div className="imagine-page" data-testid="imagine">
      <Sidebar options={options} image_array={options_images} />
    </div>
  );
}
