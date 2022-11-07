import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Carousel from "react-bootstrap/Carousel";
import DetailPage from "./DetailPage";

const WatchList: React.FC = () => {
  const watchlist = useAppSelector((state) => state.watchlist);

  return (
    <>
      {watchlist.mylist.length ? (
        <div className="watchlistcontainer">
          <Carousel variant={"dark"} controls={false}>
            {watchlist.mylist.map((city: any) => (
              <Carousel.Item key={city.id}>
                <DetailPage currentCity={city}></DetailPage>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="blank_watchlist">
          <div className="img"></div>
          <div className="message">No locations added to watchlist</div>
        </div>
      )}
    </>
  );
};

export default WatchList;
