import { useEffect, useState } from "react";
import { LocationDetailsForFixedCities } from "../../constants";
import { fetchWeather } from "../../redux/actions";
import SearchBar from "../searchBar";
import {
  StyledCities,
  StyledHeader,
  CitiesContainer,
  StyledLocationIcon,
} from "./header.styled";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isPolling, setIsPolling] = useState(true);

  useEffect(() => {
    let interval;

    const fetchWeatherForCity = () => {
      const city = LocationDetailsForFixedCities[currentCityIndex];
      dispatch(fetchWeather({ city: city.name }));
    };

    if (isPolling) {
      fetchWeatherForCity();

      interval = setInterval(() => {
        setCurrentCityIndex((prevIndex) => {
          const nextIndex =
            (prevIndex + 1) % LocationDetailsForFixedCities.length;
          return nextIndex;
        });
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [currentCityIndex, isPolling]);

  const handleLocationClick = () => {
    setIsPolling(false);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lon: longitude };

          dispatch(fetchWeather(location));
        },
        (error) => {
          toast.error("Error getting location: ", error.message);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser");
    }
  };

  const handleCitySearch = (location) => {
    setIsPolling(false);
    dispatch(fetchWeather(location));
  };

  const handleCityInputSearch = (city) => {
    setIsPolling(false);
    dispatch(fetchWeather({ city: city }));
  };

  return (
    <StyledHeader>
      <CitiesContainer>
        {LocationDetailsForFixedCities.map((city, index) => (
          <StyledCities
            key={index}
            onClick={() => handleCitySearch({ lat: city.lat, lon: city.lon })}
          >
            {city.name}
          </StyledCities>
        ))}
        <StyledLocationIcon
          src="https://img.icons8.com/?&id=8209&format=png&color=ffffff"
          alt="location-icon"
          onClick={handleLocationClick}
        />
      </CitiesContainer>

      <SearchBar onSearch={handleCityInputSearch} />
    </StyledHeader>
  );
};

export default Header;
