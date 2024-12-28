import React, { useEffect, useState, KeyboardEvent } from "react";
import "./search.css";
import ImageButton from "../buttons/ImageButton";
import { imageButtonProperties } from "../../defaultCSS/Button";
import searchIcon from "../../assets/icons/search.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function newQuery() {
    const searchInput = document.getElementById(
      "searchInput"
    ) as HTMLInputElement | null;
    const searchInputValue = searchInput?.value?.toLowerCase() ?? "";
    setQuery(searchInputValue);
  }

  useEffect(() => {
    onSearch(query);
  }, [query, setQuery]);

  return (
    <div className="search-bar">
      <ImageButton
        src={searchIcon}
        alt="Search"
        toolTipText="Search"
        type="button"
        onClick={() => {}}
        {...imageButtonProperties}
      />
      <input
        id="searchInput"
        className="searchbar-input"
        type="text"
        placeholder="Search Here..."
        value={query}
        onChange={() => newQuery()}
      />
    </div>
  );
}
