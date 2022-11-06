import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { add, remove } from "../slices/watchlistSlice";
const DetailPage: React.FC = () => {
  const watchlist = useAppSelector((state) => state.watchlist);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="navbar">
        <span className="app_logo"></span>
        <span className="app_name">Weather Forecaster</span>
      </div>
      <div className="details-container">
        <div className="back-btn">
          <Link to="/">{"< Back"}</Link>
        </div>
        <div className="weather-card">
          <div className="icon"></div>
          <div className="cityname">Banglore &#9664;</div>
          <div className="temprature">35&#176;</div>
        </div>
        <div className="action-card">
          <button
            onClick={() => {
              dispatch(add("Kota"));
            }}>
            Add to list {"(+)"}
          </button>
        </div>
        <div className="info-card">
          <div className="item">
            <div className="name">TIME</div>
            <div className="value">11:07 AM</div>
          </div>
          <div className="item">
            <div className="name">PRESSURE</div>
            <div className="value">678</div>
          </div>
          <div className="item">
            <div className="name">% RAIN</div>
            <div className="value">40%</div>
          </div>
          <div className="item">
            <div className="name">HUMIDITY</div>
            <div className="value">96</div>
          </div>
        </div>
        <div className="graph-card">
          <div className="left">
            <div className="heading">Sunrise and Sunset</div>
            <div className="sun-info">
              <div>
                Length of the day : <strong>xxx</strong>
              </div>
              <div>
                Remaining Daylight : <strong>xxx</strong>
              </div>
            </div>
          </div>
          <div className="right">graph will come here</div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
