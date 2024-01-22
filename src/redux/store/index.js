import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import generalReducers from "../reducers/GeneralReducers";
import player from "../reducers/Player";
import like from "../reducers/Like";
import albumState from "../reducers/AlbumReducer";
import favourites from "../reducers/Favourites";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["GeneralReducers"],
};

const rootReducer = combineReducers({
  GeneralReducers: generalReducers,
  Player: player,
  Like: like,
  albumState: albumState,
  favourites: favourites,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: [],
});

export const persiStore = persistStore(store);
