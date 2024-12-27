import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./button.css";
import ChevronUpIcon from "../../icons/chevron-up.svg";
import ChevronDownIcon from "../../icons/chevron-down.svg";

type ImageButtonProps = {
  src: string;
  alt: string;
  toolTipText: string;
  onClick: () => void;
  fontSize?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  isDropDown?: boolean;
  isWordDropDownOpen?: boolean;
  fontFamily?: string;
  type?: "button" | "submit" | "reset";
};

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
      <Tooltip id={`${toolTipText}-id`} place="bottom-start" />
    </>
  );
}
