import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  margin: -8px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  font-family: sans-serif;
`;

export const StyledMainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
