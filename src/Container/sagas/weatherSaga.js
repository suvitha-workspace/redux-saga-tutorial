import { call, delay, put, takeLatest } from "redux-saga/effects";
import * as actions from "../service/weather.action";
import * as WC from "../constants/action-types";
//import axios from "axios";
import { WeatherResponse } from "../../Components/Modal/WeatherResponse";



function fetchAPI(weekNo) {
  const response = WeatherResponse.data.find( we => we.weekNo === weekNo)
  return response;
}

function* fetchWeatherDetails(payload) {
  yield delay(4000);
  const weekNo = payload?.weekNo;
  const response = yield call(fetchAPI, weekNo);
  if (response) yield put(actions.loadWeatherDetailsSuccess(response));
  else yield put(actions.loadWeatherDetailsFailure("Error in Fetching Records..."));
}

function* weatherSaga() {
  yield takeLatest(WC.LOAD_WEATHER_DETAILS, fetchWeatherDetails);
}

export default weatherSaga;