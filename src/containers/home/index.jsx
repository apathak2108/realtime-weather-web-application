import Header from "../../components/header";
import WeatherSummary from "../../components/weatherSummary";
import { StyledHomeContainer, StyledMainContent } from "./home.styled";
import { useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { validWeatherConditions } from "../../constants";

const HomeContainer = () => {
  const imageCondition =
    useSelector((state) => state?.weather?.weatherData?.weather[0]?.main) ??
    "Atmosphere";

  const image = validWeatherConditions.includes(imageCondition)
    ? imageCondition
    : "Drizzle";
  const imageUrl = require(`../../assets/wallpapers/${image}.jpg`);

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
