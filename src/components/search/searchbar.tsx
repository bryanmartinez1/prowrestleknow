import React, { useEffect, useState, KeyboardEvent } from "react";
import "./search.css";
import ImageButton from "../buttons/ImageButton";
import { imageButtonProperties } from "../../defaultCSS/Button";
import searchIcon from "../../assets/icons/search.svg";
import clearIcon from "../../assets/icons/x-circle.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <ImageButton
        src={searchIcon}
        alt="Search"
        toolTipText="Search"
        type="button"
        onClick={handleSearch}
        {...imageButtonProperties}
      />
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search Here..."
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoFocus={false}
      />
      <ImageButton
        src={clearIcon}
        alt="Clear"
        toolTipText="Clear"
        type="button"
        onClick={handleClear}
        {...imageButtonProperties}
      />
    </div>
  );
}
