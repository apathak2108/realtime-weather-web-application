import Header from "../../components/header";
import WeatherSummary from "../../components/weatherSummary";
import { StyledHomeContainer, StyledMainContent } from "./home.styled";
import { useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { validWeatherConditions } from "../../constants";
import * as images from "../../assets/wallpapers";

const HomeContainer = () => {
  const imageCondition = useSelector(
    (state) => state?.weather?.weatherData?.weather[0]?.main
  );
  const image = validWeatherConditions.includes(imageCondition)
    ? imageCondition
    : "Drizzle";
  const imageUrl = images[image] || images.Drizzle;

  return (
    <StyledHomeContainer backgroundimage={imageUrl}>
      <Header />
      <StyledMainContent>
        <WeatherSummary />
      </StyledMainContent>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
