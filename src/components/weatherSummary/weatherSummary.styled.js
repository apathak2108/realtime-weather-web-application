import styled from "styled-components";

export const SummaryContainer = styled.section`
  margin-top: 15px;
  width: 100%;
  max-width: 100%; // Make it full-width on mobile screens
  box-sizing: border-box;

  @media (min-width: 601px) {
    max-width: 420px; // Apply max-width for larger screens
  }
`;

export const WeatherCard = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 10px;  // Slightly reduce border-radius for mobile
  padding: 15px; // Reduced padding for mobile
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px; // Reduced margin for compact layout
  transition: transform 0.3s ease;
  font-weight: 600;

  &:hover {
    transform: translateY(-2px);
  }

  .weather-details {
    text-align: center;

    .date-time {
      font-size: 0.8em; // Slightly smaller on mobile
      color: #666;
      margin-bottom: 8px;
    }

    .city {
      font-weight: bold;
      font-size: 1.1em; // Slightly reduced for mobile
      color: #333;
    }

    .condition {
      font-size: 0.9em; // Reduced for mobile
      font-weight: 600;
      color: #555;
      margin: 4px 0;
    }

    .temperature {
      font-size: 2.5em; // Reduced for smaller screens
      color: #ff5722;
      margin: 5px 0;
    }
  }

  .additional-info,
  .additional-info-2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15px; // Reduced margin for mobile
    font-size: 0.8em; // Smaller font size for mobile
    color: #555;

    p {
      margin: 3px 0;  // Reduce spacing between text elements
    }
  }
`;

export const InputButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;  // Reduced margin for mobile
`;

export const ThresholdInput = styled.input`
  width: 100%;
  padding: 8px; // Slightly reduced padding for mobile
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  box-sizing: border-box;

  &:focus {
    border-color: #ff5722;
    outline: none;
    box-shadow: 0 0 5px rgba(255, 87, 34, 0.5);
  }

  @media (min-width: 601px) {
    padding: 10px;  // Larger padding on larger screens
  }
`;

export const SetButton = styled.button`
  padding: 8px;  // Reduced padding for mobile
  margin-left: 8px; // Reduced margin for compact layout
  border: none;
  border-radius: 5px;
  background-color: #ff5722;
  color: white;
  font-size: 0.9em; // Reduced font size for mobile
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e64a19;
  }

  @media (min-width: 601px) {
    padding: 10px;  // Larger padding for bigger screens
    font-size: 1em;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0; // Reduced margin for mobile

  img {
    width: 18px; // Reduced icon size for mobile
    height: 18px;
    margin-right: 4px;
  }

  p {
    margin: 0;
    font-size: 0.9em;  // Reduced font size for mobile
  }

  @media (min-width: 601px) {
    img {
      width: 20px;  // Normal size for bigger screens
      height: 20px;
    }

    p {
      font-size: 1em;  // Normal font size for bigger screens
    }
  }
`;
