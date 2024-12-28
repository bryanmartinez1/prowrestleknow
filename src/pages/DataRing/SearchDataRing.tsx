import React, { useState, useEffect } from "react";
import "./data_ring.css";
import Searchbar from "../../components/search/Searchbar";

export default function SearchDataRing() {
  const [dataRingSearch, setDataRingSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setDataRingSearch(result);
  };

  useEffect(() => {
    console.log("Data ring Search: " + dataRingSearch);
  }, [dataRingSearch]);

  return (
    <div className="data_ring-page">
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
