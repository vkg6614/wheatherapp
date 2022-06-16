import axios from "axios";
import {
  GET_LAT_LON_WEATHER_DATA_FAIL,
  GET_LAT_LON_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAIL,
  GET_WEATHER_DATA_LOADING,
  GET_WEATHER_DATA_SUCCESS,
} from "../ActionTypes/ActionTypes";

export const getWeatherAction = (city) => async (dispatch) => {
  try {
    dispatch({ type: GET_WEATHER_DATA_LOADING });
    let { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude=hourly,daily&appid=e9735202d10333d3b9d8a59d33ab6be9`
    );
    dispatch({ type: GET_WEATHER_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_DATA_FAIL, payload: error });
  }
};

export const getLatLonWeatherAction =
  (latitude, longitude) => async (dispatch) => {
    try {
      let { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=e9735202d10333d3b9d8a59d33ab6be9`
      );
      dispatch({ type: GET_LAT_LON_WEATHER_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_LAT_LON_WEATHER_DATA_FAIL, payload: error });
    }
  };
