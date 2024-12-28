import React, { useEffect, useState } from "react";
import "./help.css";
import Searchbar from "../../components/search/Searchbar";

export default function SearchHelp() {
  const [helpSearch, setHelpSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setHelpSearch(result);
  };

  useEffect(() => {
    console.log("Help Search: " + helpSearch);
  }, [helpSearch]);

  return (
    <div className="help-page">
      <Searchbar onSearch={handleSearch} />;
    </div>
  );
}
