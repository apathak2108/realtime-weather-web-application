import { useState } from "react";
import Header from "../../components/header";
import WeatherSummary from "../../components/weatherSummary";
import { StyledHomeContainer, StyledMainContent } from "./home.styled";

const HomeContainer = () => {
  const [image, setImage] = useState("thunderstorm");
  const imageUrl = require(`../../assets/wallpapers/${image}.jpg`);

  return (
    <StyledHomeContainer backgroundImage={imageUrl}>
      <Header />
      <StyledMainContent>
        <WeatherSummary />
      </StyledMainContent>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
