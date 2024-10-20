import {
  FETCH_WEATHER_FROM_BACKEND_REQUEST,
  FETCH_WEATHER_FROM_BACKEND_SUCCESS,
  FETCH_WEATHER_FROM_BACKEND_ERROR,
  FETCH_WEATHER_DIRECTLY_REQUEST,
  FETCH_WEATHER_DIRECTLY_SUCCESS,
  FETCH_WEATHER_DIRECTLY_ERROR,
  SET_ACTIVE_UNIT,
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE,
  SET_THRESHOLD_REQUEST,
  SET_THRESHOLD_SUCCESS,
  SET_THRESHOLD_FAILURE,
} from "./actionTypes";

const initialState = {
  activeUnit: "C",
  weatherData: null,
  loading: false,
  error: null,
  alerts: [],
  threshold: null,
  thresholdError: null,
  alertsLoading: false,
  alertsError: null,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_UNIT:
      return {
        ...state,
        activeUnit: action.payload,
      };
    case FETCH_WEATHER_FROM_BACKEND_REQUEST:
    case FETCH_WEATHER_DIRECTLY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_FROM_BACKEND_SUCCESS:
    case FETCH_WEATHER_DIRECTLY_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null,
      };
    case FETCH_WEATHER_FROM_BACKEND_ERROR:
    case FETCH_WEATHER_DIRECTLY_ERROR:
      return {
        ...state,
        loading: false,
        weatherData: null,
        error: action.payload,
      };
    case SET_THRESHOLD_REQUEST:
    case FETCH_ALERTS_REQUEST:
      return {
        ...state,
        alertsLoading: true,
        alertsError: null,
      };
    case FETCH_ALERTS_SUCCESS:
      return {
        ...state,
        alertsLoading: false,
        alerts: action.payload.cities,
        alertsError: null,
      };
    case FETCH_ALERTS_FAILURE:
      return {
        ...state,
        alertsLoading: false,
        alerts: [],
        alertsError: action.payload,
      };
    case SET_THRESHOLD_SUCCESS:
      return {
        ...state,
        threshold: action.payload,
        alertsLoading: false,
      };
    case SET_THRESHOLD_FAILURE:
      return {
        ...state,
        thresholdError: action.payload,
        alertsLoading: false,
      };
    default:
      return state;
  }
};

export default weatherReducer;
