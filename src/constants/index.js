export const PrimaryCities = [
  "Bangalore",
  "Delhi",
  "Mumbai",
  "Chennai",
  "Kolkata",
  "Hyderabad",
];

export const weatherInfoData = [
  {
    imageUrl: "http://openweathermap.org/img/wn/50n@4x.png",
    altText: "Real Feel Icon",
    label: "Feels Like",
    value: "main.feels_like",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=15365&format=png&color=000000",
    altText: "Humidity Icon",
    label: "Humidity",
    value: "main.humidity",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=pLiaaoa41R9n&format=png&color=000000",
    altText: "Wind Icon",
    label: "Wind",
    value: "wind.speed",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=6yomF9LAoWai&format=png&color=000000",
    altText: "High Icon",
    label: "High",
    value: "main.temp_max",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=jxvLjadBt5cC&format=png&color=000000",
    altText: "Low Icon",
    label: "Low",
    value: "main.temp_min",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=52585&format=png&color=000000",
    altText: "Average Icon",
    label: "Average",
    value: "(main.temp_max + main.temp_min) / 2",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=njmmGrhoNFDl&format=png&color=000000",
    altText: "Sunrise Icon",
    label: "Sunrise",
    value: "formatTimestamp(sys.sunrise).formattedTime",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=118799&format=png&color=000000",
    altText: "Sunset Icon",
    label: "Sunset",
    value: "formatTimestamp(sys.sunset).formattedTime",
  },
];

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const validWeatherConditions = [
  "Clear",
  "Clouds",
  "Drizzle",
  "Rain",
  "Snow",
  "Mist",
  "Haze",
  "Atmosphere",
  "Sand",
  "Thunderstorm",
  "Tornado",
];