import React, { useEffect, useState } from "react";
import "./home.css";
import bgImage from "../../assets/icons/pwk/home-page.jpg";
import Searchbar from "../../components/search/Searchbar";

export default function Home() {
  const [homeSearchResult, setHomeSearchResult] = useState<string>("");
  const handleSearch = (result: string) => {
    setHomeSearchResult(result);
  };

  useEffect(() => {
    console.log("Home Search: " + homeSearchResult);
  }, [homeSearchResult]);

  return (
    <div className="home-page">
      <img src={bgImage} className="home-image" alt="Home Background" />
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
