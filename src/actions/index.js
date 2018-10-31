import axios from "axios";
import * as types from '../contants/actionTypes';

const API_KEY = "c42d6c6113b66e14861a5e36565f6a71";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}
