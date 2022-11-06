import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { setCityName } from "../slices/currentCitySlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { fetchWeatherData } from "../slices/currentCitySlice";
type CityList = string[];
const cities: CityList = [
  "Banglore",
  "Mumbai",
  "Bangkok",
  "Baran",
  "Kota",
  "Rajasthan",
  "Mobara",
  "Manju",
];

const SearchBar: React.FC = () => {
  const [searchterm, setsearchterm] = useState<string>("");
  const dispatch = useAppDispatch();
  const cityname = useAppSelector((state) => state.currentCity.name);

  const handleOnChange = (value: string) => {
    setsearchterm(value);
  };

  const handleSearch = (value: string) => {
    setsearchterm(value);
    dispatch(setCityName(value));
  };

  useEffect(() => {
    dispatch(fetchWeatherData(cityname));
  }, [cityname]);

  return (
    <div className="searchbar">
      <input
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        value={searchterm}
        type="text"
        placeholder="Search Location"
        className="searchbar"
      />
      <button onClick={() => handleSearch(searchterm)} type="submit">
        <span></span>
      </button>
      <div className="pillcontainer">
        {searchterm &&
          cities
            .filter((city) => {
              const item = city.toLowerCase();
              const prefix = searchterm.toLowerCase();
              return item.startsWith(prefix);
            })
            .slice(0, 3)
            .map(
              (city) =>
                city.toLowerCase() !== searchterm.toLocaleLowerCase() && (
                  <button
                    key={city}
                    onClick={() => {
                      handleSearch(city);
                    }}
                    className="pill">
                    {city}
                  </button>
                )
            )}
      </div>
    </div>
  );
};

export default SearchBar;
