import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Games from "./Pages/Games/Games";
import Compare from "./Pages/Compare/Compare";
import Chart from "./Pages/Chart/Chart";
import Information from "./Pages/Information/Information";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/games" element={<Games />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
