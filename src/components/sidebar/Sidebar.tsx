import React from "react";
import "./sidebar.css";
import ImageButton from "../../components/buttons/ImageButton";

import { sidebarImageButtonProperties } from "../../defaultCSS/Button";
import { SidebarType } from "../../types/components";

export default function Sidebar({
  selected,
  setSelected,
  options,
  image_array,
}: SidebarType) {
  return (
    <div className="sidebar" data-testid="sidebar">
      {options.map((option, index) => (
        <div
          className="sidebar-option"
          data-testid="sidebar-option"
          style={{
            backgroundColor:
              selected === option.name ? "#ec3c38" : "transparent",
          }}
          key={index}
        >
          <ImageButton
            src={image_array[index]}
            alt={option.name}
            toolTipText={option.name}
            onClick={() => setSelected(option.name)}
            type="button"
            {...sidebarImageButtonProperties}
            place="right"
          />
        </div>
      ))}
    </div>
  );
}
