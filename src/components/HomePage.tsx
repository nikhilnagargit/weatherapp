import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import SearchBar from "./SearchBar";
import WatchList from "./WatchList";

import WeatherCard from "./WeatherCard";

const HomePage: React.FC = () => {
  const currentCitydata = useAppSelector((state) => state.currentCity.data);
  return (
    <>
      <div className="mycontainer">
        <SearchBar />
        {Object.keys(currentCitydata).length !== 0 ? (
          <WeatherCard />
        ) : (
          <WatchList />
        )}
      </div>
    </>
  );
};

export default HomePage;
