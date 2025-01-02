import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import WordButton from "../buttons/WordButton";
import { WordDropDownProps } from "../../types/components";

export default function WordDropdown({
  title,
  options,
  buttonProps,
  optionsFunctions,
  optionsFontSize = "12px",
  height = "100%",
  fontFamily = "Lexend",
}: WordDropDownProps) {
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const toggleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  const optionSelect = (index: number) => {
    optionsFunctions[index]();
    toggleDropDown();
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, []);

  return (
    <div
      className="img-dd-dropdown-container"
      ref={dropdownRef}
      style={{ height: height, fontFamily }}
      data-testid="word dropdown"
    >
      <WordButton
        text={title}
        onClick={toggleDropDown}
        {...buttonProps}
        isDropDown
        isWordDropDownOpen={isDropDownOpen}
      />
      {isDropDownOpen && (
        <div className="img-dd-dropdown-content">
          {options.map((option, index) => (
            <div
              className="ddPara"
              onClick={() => optionSelect(index)}
              key={index}
              style={{ fontSize: optionsFontSize }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
