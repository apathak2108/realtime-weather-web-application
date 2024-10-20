import { useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledSearchContainer,
} from "./searchBar.styled";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <StyledSearchContainer>
      <StyledInput
        type="text"
        placeholder="Search for city..."
        value={city}
        onChange={handleInputChange}
      />
      <StyledButton type="submit" onClick={handleSearch}>
        Search
      </StyledButton>
    </StyledSearchContainer>
  );
};

export default SearchBar;
