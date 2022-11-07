import React from "react";
import DetailPage from "./DetailPage";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { removeCityName } from "../slices/currentCitySlice";

const DetailPageParent = () => {
  const dispatch = useAppDispatch();
  const currentCity: any = useAppSelector(
    (state: any) => state.currentCity.data
  );
  return (
    <div className="detailPagecontainer">
      <Link
        to="/"
        onClick={() => {
          dispatch(removeCityName());
        }}
        className="back-btn">
        <div className="backarrow"></div>
        <div> {"Back"}</div>
      </Link>
      <DetailPage currentCity={currentCity}></DetailPage>
    </div>
  );
};

export default DetailPageParent;
