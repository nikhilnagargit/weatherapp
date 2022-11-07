import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const WeatherCard = () => {
  const weatherdata: any = useAppSelector((state) => state.currentCity.data);
  return (
    <div className="weatherdatacard">
      <div className="header">
        <div>{weatherdata.name}</div>
        <Link to={"/details"} className="arrow"></Link>
      </div>
      <div className="middle">
        <div>{(weatherdata.main.temp - 273.15).toPrecision(2)}&#176;</div>
        <div className="icon"></div>
      </div>
      <div className="bottom">
        <div className="block">
          <span className="icon"></span>
          <span className="text">WARNING</span>
        </div>
        <div className="desc">{weatherdata.weather[0].description}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
