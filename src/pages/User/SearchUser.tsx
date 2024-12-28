import React, { useEffect, useState } from "react";
import "./user.css";
import Searchbar from "../../components/search/Searchbar";

export default function SearchUser() {
  const [userSearch, setUserSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setUserSearch(result);
  };

  useEffect(() => {
    console.log("User Search: " + userSearch);
  }, [userSearch]);

  return (
    <div className="user-page">
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
