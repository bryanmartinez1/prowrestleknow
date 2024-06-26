import React, { useState } from "react";
import "./Search.css";
import Searchbar from "../../Components/Searchbar/Searchbar";
import SearchSelect from "../../Components/SearchSelect/SearchSelect";
import Card from "../../Components/Card/Card";

export default function Search() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("wrestler");

  return (
    <div className="search">
      <Searchbar setSearch={setSearch} />
      <SearchSelect setSelect={setSelect} selected={select} />
      <div className="cardGrid">
        <Card name="Bryan Martinez" />
      </div>
      {search}
    </div>
  );
}
