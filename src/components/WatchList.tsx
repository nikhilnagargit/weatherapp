import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const WatchList: React.FC = () => {
  const watchlist = useAppSelector((state) => state.watchlist);

  return (
    <>
      {watchlist.length ? (
        <div>watchlist</div>
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
