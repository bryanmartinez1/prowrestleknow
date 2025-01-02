import React, { useState, KeyboardEvent } from "react";
import "./search.css";
import ImageButton from "../buttons/ImageButton";
import { imageButtonProperties } from "../../defaultCSS/Button";
import searchIcon from "../../assets/icons/search.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = () => {
    const trimmedQuery = inputValue.trim().toLowerCase();
    onSearch(trimmedQuery);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar" data-testid="searchbar">
      <ImageButton
        src={searchIcon}
        alt="Search"
        toolTipText="Search"
        type="button"
        onClick={handleSearch}
        {...imageButtonProperties}
      />
      <input
        id="searchInput"
        className="searchbar-input"
        type="text"
        placeholder="Search Here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
