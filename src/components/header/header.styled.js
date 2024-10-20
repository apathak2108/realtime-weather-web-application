import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 8px;
  margin: 8px;
  background-color: rgba(211, 211, 211, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  color: #000;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  top: 12px;
  z-index: 10;

  @media (min-width: 601px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 1em;
    padding: 10px;
    margin: 5px;
  }
`;

export const CitiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
`;

export const StyledLocationIcon = styled.img`
  height: 22px;
  width: 22px;
  margin-left: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    height: 24px;
    width: 24px;
  }

  @media (min-width: 601px) {
    height: 24px;
    width: 24px;
    margin-left: 8px;
  }
`;

export const StyledCities = styled.span`
  padding: 6px;
  margin: 3px;
  color: whitesmoke;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }

  @media (min-width: 601px) {
    padding: 8px;
    margin: 5px;
  }
`;
