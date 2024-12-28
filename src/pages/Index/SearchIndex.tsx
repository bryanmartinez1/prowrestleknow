import React, { useEffect, useState } from "react";
import "./index.css";
import Searchbar from "../../components/search/Searchbar";

export default function SearchIndex() {
  const [indexSearch, setIndexSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setIndexSearch(result);
  };

  useEffect(() => {
    console.log("Index Search: " + indexSearch);
  }, [indexSearch]);

  return (
    <div className="index-page">
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
