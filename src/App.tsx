import React from "react";
import "./App.css";
import "./components/styles.css";
import "./components/mobilestyles.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPageParent from "./components/DetailPageParent";

function App() {
  return (
    <div className="App">
      <div className="navbartop">
        <span className="app_logo"></span>
        <span className="app_name">Weather Forecaster</span>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailPageParent />} />
      </Routes>
    </div>
  );
}

export default App;
