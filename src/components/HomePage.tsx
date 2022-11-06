import React from "react";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
import SearchBar from "./SearchBar";
import "./styles.css";
import WatchList from "./WatchList";

import WeatherCard from "./WeatherCard";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="navbar">
        <span className="app_logo"></span>
        <span className="app_name">Weather Forecaster</span>
      </div>

      <SearchBar />
      <WeatherCard />

      {/* <WatchList /> */}
    </div>
  );
};

export default HomePage;
