import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Games from "./Pages/Games/Games";
import Compare from "./Pages/Compare/Compare";
import Chart from "./Pages/Chart/Chart";

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
      </Routes>
    </div>
  );
}

export default App;
