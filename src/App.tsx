import React from 'react';
import './App.css';
import {Route,Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/details" element={ <DetailPage/> } />
      </Routes>
    </div>
  );
}

export default App;
