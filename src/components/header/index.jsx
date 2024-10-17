import { PrimaryCities } from "../../constants";
import SearchBar from "../searchBar";
import {
  StyledCities,
  StyledHeader,
  CitiesContainer,
  StyledLocationIcon,
} from "./header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <CitiesContainer>
        {PrimaryCities.map((city, index) => (
          <StyledCities key={index}>{city}</StyledCities>
        ))}
        <StyledLocationIcon
          src="https://img.icons8.com/?&id=8209&format=png&color=ffffff"
          alt="location-icon"
        />
      </CitiesContainer>
      <SearchBar />
    </StyledHeader>
  );
};

export default Header;
