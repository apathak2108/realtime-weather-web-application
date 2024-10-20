import { useState } from "react";
import {
  SummaryContainer,
  WeatherCard,
  ThresholdInput,
  SetButton,
  InputButtonContainer,
  InfoItem,
} from "./weatherSummary.styled";
import TemperatureConversionButtons from "../tempButtons";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateAverage,
  formatTimestamp,
  temperatureToShow,
} from "../../utils";
import { setThresholdTemperature } from "../../redux/actions";

const WeatherSummary = () => {
  const dispatch = useDispatch();
  const [threshold, setThreshold] = useState("");
  const { activeUnit, weatherData, loading } = useSelector(
    (state) => state?.weather
  );

  const handleThresholdChange = (e) => {
    setThreshold(e.target.value);
  };

  const handleSetButtonClick = () => {
    const thresholdTemp = +threshold + 273;
    dispatch(setThresholdTemperature(weatherData.name, thresholdTemp));
    setThreshold("");
  };

  return (
    <SummaryContainer>
      {weatherData ? (
        <WeatherCard>
          <InputButtonContainer>
            <ThresholdInput
              type="text"
              inputMode="numeric"
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
              {loading ? (
                <Skeleton width={50} />
              ) : (
                formatTimestamp(weatherData.dt).formattedDate
              )}{" "}
              | Local time:{" "}
              {loading ? (
                <Skeleton width={50} />
              ) : (
                formatTimestamp(weatherData.dt).formattedTime
              )}
            </p>
            <p className="city">
              {loading ? (
                <Skeleton width={50} />
              ) : (
                `${weatherData.name}, ${weatherData.sys.country}`
              )}
            </p>
            <p className="condition">
              {loading ? <Skeleton width={50} /> : weatherData.weather[0].main}
            </p>
            <h1 className="temperature">
              {loading ? (
                <Skeleton width={50} />
              ) : (
                `${temperatureToShow(activeUnit, weatherData.main.temp)} ${
                  activeUnit === "C" ? "°C" : "°K"
                }`
              )}
            </h1>
          </div>
          <div className="additional-info-2">
            <InfoItem>
              <img
                src="http://openweathermap.org/img/wn/50n@4x.png"
                alt="Real Feel Icon"
              />
              <p>
                Feels Like:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  `${temperatureToShow(
                    activeUnit,
                    weatherData?.main?.feels_like
                  )} ${activeUnit === "C" ? "°C" : "°K"}`
                )}
              </p>
            </InfoItem>
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=15365&format=png&color=000000"
                alt="Humidity Icon"
              />
              <p>
                Humidity:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  `${weatherData?.main?.humidity} %`
                )}
              </p>
            </InfoItem>
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=pLiaaoa41R9n&format=png&color=000000"
                alt="Wind Icon"
              />
              <p>
                Wind:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  `${weatherData?.wind?.speed} km/h`
                )}
              </p>
            </InfoItem>
          </div>
          <div className="additional-info">
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=6yomF9LAoWai&format=png&color=000000"
                alt="High Icon"
              />
              <p>
                High:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  `${temperatureToShow(
                    activeUnit,
                    weatherData?.main?.temp_max
                  )} ${activeUnit === "C" ? "°C" : "°K"}`
                )}
              </p>
            </InfoItem>
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=jxvLjadBt5cC&format=png&color=000000"
                alt="Low Icon"
              />
              <p>
                Low:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  `${temperatureToShow(
                    activeUnit,
                    weatherData?.main?.temp_min
                  )} ${activeUnit === "C" ? "°C" : "°K"}`
                )}
              </p>
            </InfoItem>
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=52585&format=png&color=000000"
                alt="Average Icon"
              />
              <p>
                Average:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  `${calculateAverage(weatherData, activeUnit)} ${
                    activeUnit === "C" ? "°C" : "°K"
                  }`
                )}
              </p>
            </InfoItem>
          </div>
          <div className="additional-info">
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=njmmGrhoNFDl&format=png&color=000000"
                alt="Sunrise Icon"
              />
              <p>
                Sunrise:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  formatTimestamp(weatherData?.sys?.sunrise).formattedTime
                )}
              </p>
            </InfoItem>
            <InfoItem>
              <img
                src="https://img.icons8.com/?size=100&id=118799&format=png&color=000000"
                alt="Sunset Icon"
              />
              <p>
                Sunset:{" "}
                {loading ? (
                  <Skeleton width={50} />
                ) : (
                  formatTimestamp(weatherData?.sys?.sunset).formattedTime
                )}
              </p>
            </InfoItem>
          </div>
        </WeatherCard>
      ) : (
        <WeatherCard>Please select a city</WeatherCard>
      )}
    </SummaryContainer>
  );
};

export default WeatherSummary;
