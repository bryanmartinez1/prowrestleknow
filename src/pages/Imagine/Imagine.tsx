import React, { useState, useEffect } from "react";
import "./imagine.css";
import Searchbar from "../../components/search/Searchbar";

export default function Imagine() {
  const [homeSearchResult, setHomeSearchResult] = useState<string>("");
  const handleSearch = (result: string) => {
    setHomeSearchResult(result);
  };

  useEffect(() => {
    console.log("Home Search: " + homeSearchResult);
  }, [homeSearchResult]);

  return (
    <div className="imagine-page">
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
