import { useState } from "react";
import {
  SummaryContainer,
  WeatherCard,
  ThresholdInput,
  SetButton,
  InfoItem,
  InputButtonContainer,
} from "./weatherSummary.styled";
import TemperatureConversionButtons from "../tempButtons";

const WeatherSummary = () => {
  const [threshold, setThreshold] = useState("");

  const handleThresholdChange = (e) => {
    setThreshold(e.target.value);
  };

  const handleSetButtonClick = () => {
    // Handle the button click event
    console.log("Threshold set to:", threshold);
  };

  return (
    <SummaryContainer>
      <WeatherCard>
        <InputButtonContainer>
          <ThresholdInput
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            placeholder="Set Temperature Threshold"
            value={threshold}
            onChange={handleThresholdChange}
          />
          <SetButton onClick={handleSetButtonClick}>Set</SetButton>
        </InputButtonContainer>
        <TemperatureConversionButtons />
        <div className="weather-details">
          <p className="date-time">
            Thursday, 17 Oct 2024 | Local time: 11:39 PM
          </p>
          <p className="city">Hyderabad, IN</p>
          <p className="condition">Haze</p>
          <h1 className="temperature">25°</h1>
        </div>
        <div className="additional-info-2">
          <InfoItem>
            <img
              src="http://openweathermap.org/img/wn/50n@4x.png"
              alt="Real Feel Icon"
            />
            <p>Feels Like: 26°</p>
          </InfoItem>
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=15365&format=png&color=000000"
              alt="Humidity Icon"
            />
            <p>Humidity: 88%</p>
          </InfoItem>
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=pLiaaoa41R9n&format=png&color=000000"
              alt="Wind Icon"
            />
            <p>Wind: 3 km/h</p>
          </InfoItem>
        </div>
        <div className="additional-info">
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=6yomF9LAoWai&format=png&color=000000"
              alt="High Icon"
            />
            <p>High: 25°</p>
          </InfoItem>
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=jxvLjadBt5cC&format=png&color=000000"
              alt="Low Icon"
            />
            <p>Low: 25°</p>
          </InfoItem>
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=52585&format=png&color=000000"
              alt="Average Icon"
            />
            <p>Average: 25°</p>
          </InfoItem>
        </div>
        <div className="additional-info">
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=njmmGrhoNFDl&format=png&color=000000"
              alt="Sunrise Icon"
            />
            <p>Sunrise: 06:09 AM</p>
          </InfoItem>
          <InfoItem>
            <img
              src="https://img.icons8.com/?size=100&id=118799&format=png&color=000000"
              alt="Sunset Icon"
            />
            <p>Sunset: 05:53 PM</p>
          </InfoItem>
        </div>
      </WeatherCard>
    </SummaryContainer>
  );
};

export default WeatherSummary;
