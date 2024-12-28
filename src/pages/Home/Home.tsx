import React from "react";
import "./home.css";
import bgImage from "../../assets/icons/pwk/home-page.jpg";
import Searchbar from "../../components/search/Searchbar";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Perform your search logic here, e.g., API call or filtering data
  };
  return (
    <div className="homePage">
      <img src={bgImage} className="homeImage" alt="Home Background" />
      <Searchbar onSearch={handleSearch} />
    </div>
  );
}
