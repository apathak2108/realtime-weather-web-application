import {
  SET_ACTIVE_UNIT,
  FETCH_ALERTS_REQUEST,
  FETCH_ALERTS_SUCCESS,
  FETCH_ALERTS_FAILURE,
  SET_THRESHOLD_REQUEST,
  SET_THRESHOLD_SUCCESS,
  SET_THRESHOLD_FAILURE,
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
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
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null,
      };
    case FETCH_WEATHER_FAILURE:
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
