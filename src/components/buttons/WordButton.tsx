import React from "react";
import "./button.css";
import ChevronUpIcon from "../../assets/icons/chevron-up.svg";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg";

type WordButtonProps = {
  text: string;
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
  fontWeight?: string;
};

export default function WordButton({
  text,
  fontSize = "16px",
  backgroundColor = "transparent",
  hoverBackgroundColor = "transparent",
  padding = "0",
  margin = "0",
  border = "none",
  width = "fit-content",
  height,
  borderRadius = "0%",
  isDropDown = false,
  isWordDropDownOpen = false,
  type = "button",
  fontFamily = "Lexend",
  fontWeight = "normal",
  onClick,
}: WordButtonProps) {
  const wordButtonStyle: React.CSSProperties = {
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
    fontWeight,
  };

  return (
    <button
      type={type}
      style={wordButtonStyle}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = hoverBackgroundColor)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = backgroundColor)
      }
      onClick={onClick}
      data-testid="word-button"
    >
      {text}
      {isDropDown ? (
        <img
          src={isWordDropDownOpen ? ChevronUpIcon : ChevronDownIcon}
          style={{ height: fontSize }}
          alt="Chevron"
        />
      ) : null}
    </button>
  );
}
