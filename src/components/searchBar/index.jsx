import {
  StyledButton,
  StyledInput,
  StyledSearchContainer,
} from "./searchBar.styled";

const SearchBar = () => {
  return (
    <StyledSearchContainer>
      <StyledInput type="text" placeholder="Search for weather..." />
      <StyledButton>Search</StyledButton>
    </StyledSearchContainer>
  );
};

export default SearchBar;
