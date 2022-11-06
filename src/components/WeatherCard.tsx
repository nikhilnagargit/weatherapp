import React from "react";
import { useAppSelector } from "../app/hooks";

const WeatherCard = () => {
  const weatherdata: any = useAppSelector((state) => state.currentCity.data);
  return (
    <div className="weatherdatacard">
      <div className="header">
        <h2>{weatherdata.name}</h2>
      </div>
      <div className="middle">
        <h1>{(weatherdata.main.temp - 273.15).toPrecision(2)}&#176;</h1>
        <div></div>
      </div>
      <div className="bottom">
        <div></div>
        <div>{weatherdata.weather[0].description}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
