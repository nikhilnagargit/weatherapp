import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const WeatherCard = () => {
  const weatherdata: any = useAppSelector((state) => state.currentCity.data);
  return (
    <div className="weatherdatacard">
      <div className="header">
        <h2>{weatherdata.name}</h2>
        <Link to={"/details"} className="arrow"></Link>
      </div>
      <div className="middle">
        <h1>{(weatherdata.main.temp - 273.15).toPrecision(2)}&#176;</h1>
        <div></div>
      </div>
      <div className="bottom">
        <div className="block">
          <span className="icon"></span>
          <span className="text">WARNING</span>
        </div>
        <div>{weatherdata.weather[0].description}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
