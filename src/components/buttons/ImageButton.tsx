import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./button.css";
import ChevronUpIcon from "../../assets/icons/chevron-up.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";
import { ImageButtonProps } from "../../types/components";

export default function ImageButton({
  src,
  alt,
  toolTipText,
  fontSize = "16px",
  backgroundColor = "transparent",
  hoverBackgroundColor = "transparent",
  padding = "0",
  margin = "0",
  border = "none",
  width = "fit-content",
  height = "100%",
  borderRadius = "0%",
  isDropDown = false,
  isWordDropDownOpen = false,
  type = "button",
  fontFamily = "Lexend",
  place = "bottom-start",
  onClick,
}: ImageButtonProps) {
  const imageButtonStyle: React.CSSProperties = {
    boxSizing: "border-box",
    fontSize,
    fontFamily,
    backgroundColor,
    padding,
    margin,
    cursor: "pointer",
    border,
    width,
    height,
    borderRadius,
  };

  return (
    <>
      <button
        type={type}
        style={imageButtonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = hoverBackgroundColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = backgroundColor)
        }
        onClick={onClick}
        data-tooltip-content={toolTipText}
        data-tooltip-id={`${toolTipText}-id`}
        data-testid="image_button"
      >
        <img src={src} alt={alt} width={`${width}px`} height={height} />
        {isDropDown ? (
          <img
            src={isWordDropDownOpen ? ChevronUpIcon : ChevronDownIcon}
            style={{ height: fontSize }}
            alt="Chevron"
          />
        ) : null}
      </button>
      <Tooltip id={`${toolTipText}-id`} place={place} />
    </>
  );
}
