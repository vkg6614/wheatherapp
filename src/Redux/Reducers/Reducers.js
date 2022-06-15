const {
  GET_WEATHER_DATA_LOADING,
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAIL,
} = require("../ActionTypes/ActionTypes");

export const weatherReducer = (weatherData = [], action) => {
  switch (action.type) {
    case GET_WEATHER_DATA_LOADING:
      return { loading: true, weatherData: [] };
    case GET_WEATHER_DATA_SUCCESS:
      return { loading: false, weatherData: action.payload };
    case GET_WEATHER_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return weatherData;
  }
};
