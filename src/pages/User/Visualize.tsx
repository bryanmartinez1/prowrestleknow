import React from "react";
import "./visualize.css";
import { useNavigate } from "react-router-dom";

export default function Visualize() {
  const navigate = useNavigate();
  return (
    <div className="Visualize">
      <div>
        <button onClick={() => navigate("/analytics-hub/create")}>
          Create Analytics Hub
        </button>
        <button>Create Chart</button>
      </div>
    </div>
  );
}
