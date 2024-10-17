import { useState } from "react";
import { ButtonContainer, TemperatureButton } from "./tempButtons.styled";

const TemperatureConversionButtons = () => {
  const [activeUnit, setActiveUnit] = useState("C");

  return (
    <ButtonContainer>
      <TemperatureButton
        className={activeUnit === "C" ? "active" : ""}
        onClick={() => setActiveUnit("C")}
      >
        °C
      </TemperatureButton>
      <span>|</span>
      <TemperatureButton
        className={activeUnit === "K" ? "active" : ""}
        onClick={() => setActiveUnit("K")}
      >
        °K
      </TemperatureButton>
    </ButtonContainer>
  );
};

export default TemperatureConversionButtons;
