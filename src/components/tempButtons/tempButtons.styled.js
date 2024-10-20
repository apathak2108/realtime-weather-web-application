import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: fit-content;
`;

export const TemperatureButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.2em;
  color: #ff5722;
  cursor: pointer;
  margin: 0 5px;
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: #d45a00;
  }

  &.active {
    color: #ffffff;
    background-color: #ff5722;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;
