import React, { useEffect, useState } from "react";
import "./showcase.css";
import Searchbar from "../../components/search/Searchbar";

export default function SearchShowcase() {
  const [showcaseSearch, setShowcaseSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setShowcaseSearch(result);
  };

  useEffect(() => {
    console.log("Showcase Search: " + showcaseSearch);
  }, [showcaseSearch]);

  return (
    <div className="showcase-page">
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
