import { configureStore } from "@reduxjs/toolkit";
import currentCityReducer from "../slices/currentCitySlice";
import watchlistReducer from "../slices/watchlistSlice";


const store = configureStore({
    reducer:{
        watchlist:watchlistReducer,
        currentCity:currentCityReducer
    },
})


export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch