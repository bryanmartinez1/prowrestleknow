import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Visualize from "./pages/visualize/Visualize";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/visualize" element={<Visualize />} />
      </Routes>
    </div>
  );
}

export default App;
