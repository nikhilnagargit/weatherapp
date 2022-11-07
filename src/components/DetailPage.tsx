import React from "react";
import { add, remove } from "../slices/watchlistSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const DetailPage: React.FC<any> = ({ currentCity }) => {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector((state) => state.watchlist.mylist);

  return (
    <>
      <div className="action-card-container">
        <div className="action-card">
          {
            // if my current city , already exist in watchlist, then show remove button, otherwise show add button
            watchlist.filter((city: any) => city.name === currentCity.name)
              .length ? (
              <button
                className="btn btn-danger btn-sm removebtn"
                onClick={() => {
                  dispatch(remove(currentCity.name));
                }}>
                remove
              </button>
            ) : (
              <>
                <span>Add to list </span>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    dispatch(add(currentCity));
                  }}>
                  +
                </button>
              </>
            )
          }
        </div>
      </div>
      <div className="details-container">
        <div className="weather-card">
          <div className="icon"></div>
          <div className="cityname">{currentCity.name} </div>
          <div className="temprature">
            {(currentCity.main.temp - 273.15).toPrecision(2)}&#176;
          </div>
        </div>

        <div className="info-card">
          <div className="item">
            <div className="name">TIME</div>
            <div className="value">12:00 AM</div>
          </div>
          <div className="item">
            <div className="name">PRESSURE</div>
            <div className="value">{currentCity.main.pressure}</div>
          </div>
          <div className="item">
            <div className="name">% RAIN</div>
            <div className="value">50%</div>
          </div>
          <div className="item">
            <div className="name">HUMIDITY</div>
            <div className="value">{currentCity.main.humidity}</div>
          </div>
        </div>
        <div className="graph-card">
          <div className="left">
            <div className="heading">Sunrise and Sunset-</div>
            <div className="sun-info">
              <div>
                Length of the day : <strong>10Hr 26Min</strong>
              </div>
              <div>
                Remaining Daylight : <strong>1Hr 34Min</strong>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
