import React from "react";
import "./sidebar.css";
import ImageButton from "../../components/buttons/ImageButton";

import { sidebarImageButtonProperties } from "../../defaultCSS/Button";

type SidebarOptions = {
  name: string;
};

type SidebarType = {
  options: SidebarOptions[];
  image_array: string[];
};

export default function Sidebar({ options, image_array }: SidebarType) {
  return (
    <div className="sidebar" data-testid="sidebar">
      {options.map((option, index) => (
        <ImageButton
          key={index}
          src={image_array[index]}
          alt={option.name}
          toolTipText={option.name}
          onClick={() => {}}
          type="button"
          {...sidebarImageButtonProperties}
          place="right"
        />
      ))}
    </div>
  );
}
