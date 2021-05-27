import { combineReducers } from "redux";
import weatherReducer from "./weather.reducer";

const rootReducer = combineReducers({
  weatherStore: weatherReducer,
});

export default rootReducer;
