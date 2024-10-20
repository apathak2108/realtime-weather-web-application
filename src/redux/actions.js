import axios from "axios";
import {
  FETCH_ALERTS_FAILURE,
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
  SET_ACTIVE_UNIT,
  SET_THRESHOLD_FAILURE,
  SET_THRESHOLD_REQUEST,
  SET_THRESHOLD_SUCCESS,
} from "./actionTypes";
import { toast } from "react-toastify";

export const setActiveUnit = (unit) => ({
  type: SET_ACTIVE_UNIT,
  payload: unit,
});

export const fetchWeather = (query) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_WEATHER_REQUEST });

    let url = "";
    if (query.city) {
      url = `http://localhost:5000/api/weather?city=${query.city}`;
    } else if (query.lat && query.lon) {
      url = `http://localhost:5000/api/weather?lat=${query.lat}&lon=${query.lon}`;
    } else {
      throw new Error("Invalid query. Please provide a city or coordinates.");
    }

    const response = await axios.get(url);
    const data = response.data;

    dispatch({
      type: FETCH_WEATHER_SUCCESS,
      payload: data,
    });
    toast.success(`Showing weather of ${data?.name}`);
  } catch (error) {
    dispatch({
      type: FETCH_WEATHER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
    toast.error("Something went wrong");
  }
};

export const fetchAlerts = (city) => async (dispatch) => {
  dispatch({ type: FETCH_ALERTS_REQUEST });

  try {
    const response = await axios.get(
      `http://localhost:5000/api/alerts/check-alerts?city=${city}`
    );
    dispatch({
      type: FETCH_ALERTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALERTS_FAILURE,
      payload: error.message,
    });
  }
};

export const setThresholdTemperature =
  (city, temperatureThreshold) => async (dispatch) => {
    dispatch({ type: SET_THRESHOLD_REQUEST });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/alerts/set-threshold",
        {
          city: city,
          temperatureThreshold: temperatureThreshold,
        }
      );
      toast.success(
        `Threshold temperature ${temperatureThreshold}°K set for ${city}`
      );
      dispatch({
        type: SET_THRESHOLD_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      toast.error("Error occurred !");
      dispatch({
        type: SET_THRESHOLD_FAILURE,
        payload: error.response ? error.response.data.message : error.message,
      });
    }
  };
