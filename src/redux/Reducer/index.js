import {combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { MainReducer } from "./Reducer";
import { BasketRed } from "./Reducer/BasketRed";
import { FavoriteRed } from "./Reducer/FavoriteRed";

export const  store = createStore(combineReducers({
  main: MainReducer,
  favorite: FavoriteRed,
  basket: BasketRed,
}
  
) ,composeWithDevTools())
