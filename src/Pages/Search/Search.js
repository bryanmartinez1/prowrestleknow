import React, { useState, useEffect } from "react";
import "./Search.css";
import Searchbar from "../../Components/Searchbar/Searchbar";
import SearchSelect from "../../Components/SearchSelect/SearchSelect";
import Card from "../../Components/Card/Card";
import img from "../../Images/boston_crab.png";

export default function Search() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("wrestler");

  return (
    <div className="search">
      <SearchSelect setSelect={setSelect} selected={select} />
      <Searchbar setSearch={setSearch} />
      <div className="searching">
        <p>Search: {search}</p>
        <p>Search: {select}</p>
      </div>
      <Card src={img} name="Bryan Martinez" />
    </div>
  );
}
