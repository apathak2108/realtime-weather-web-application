import axios from "axios";
import {
  FETCH_ALERTS_FAILURE,
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_WEATHER_DIRECTLY_ERROR,
  FETCH_WEATHER_DIRECTLY_REQUEST,
  FETCH_WEATHER_DIRECTLY_SUCCESS,
  FETCH_WEATHER_FROM_BACKEND_ERROR,
  FETCH_WEATHER_FROM_BACKEND_REQUEST,
  FETCH_WEATHER_FROM_BACKEND_SUCCESS,
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

export const fetchWeatherFromBackend = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_WEATHER_FROM_BACKEND_REQUEST,
    });
    try {
      const response = await axios.get("/api/weather/latest");
      dispatch({
        type: FETCH_WEATHER_FROM_BACKEND_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_WEATHER_FROM_BACKEND_ERROR,
        payload: error,
      });
    }
  };
};

export const fetchWeatherDirectly = (city, location = null) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_WEATHER_DIRECTLY_REQUEST,
    });
    try {
      let response;
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

      if (location) {
        const { lat, lon } = location;
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
      } else if (city) {
        response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
      }
      dispatch({
        type: FETCH_WEATHER_DIRECTLY_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      toast.error("City not found");
      dispatch({
        type: FETCH_WEATHER_DIRECTLY_ERROR,
        payload: error.message || "Error fetching weather data",
      });
    }
  };
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
        `Threshold temperature ${temperatureThreshold} set for ${city}`
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
