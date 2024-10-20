import { daysOfWeek, months } from "../constants";

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
  const formattedTime = `${hours}:${formattedMinutes} ${ampm}`;

  return { formattedDate, formattedTime };
};

export const temperatureToShow = (activeUnit, value) => {
  if (activeUnit === "C") {
    return (value - 273).toFixed(1);
  }
  return value;
};

export const calculateAverage = (weatherData, activeUnit) => {
  const tempMax = weatherData?.main?.temp_max;
  const tempMin = weatherData?.main?.temp_min;

  if (tempMax == null || tempMin == null) {
    return "N/A";
  }

  const averageTemp = ((tempMax + tempMin) / 2).toFixed(1);
  return activeUnit === "C" ? (averageTemp - 273).toFixed(1) : averageTemp;
};