import { PrimaryCities } from "../../constants";
import { fetchWeatherDirectly } from "../../redux/actions";
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

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lon: longitude };

          dispatch(fetchWeatherDirectly(null, location));
        },
        (error) => {
          toast.error("Error getting location: ", error.message);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser");
    }
  };

  const handleCitySearch = (city) => {
    dispatch(fetchWeatherDirectly(city, null));
  };

  return (
    <StyledHeader>
      <CitiesContainer>
        {PrimaryCities.map((city, index) => (
          <StyledCities key={index} onClick={() => handleCitySearch(city)}>
            {city}
          </StyledCities>
        ))}
      </CitiesContainer>
      <StyledLocationIcon
        src="https://img.icons8.com/?&id=8209&format=png&color=ffffff"
        alt="location-icon"
        onClick={handleLocationClick}
      />
      <SearchBar onSearch={handleCitySearch} />
    </StyledHeader>
  );
};

export default Header;
