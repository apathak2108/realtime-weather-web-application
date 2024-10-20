import { ButtonContainer, TemperatureButton } from "./tempButtons.styled";
import { useDispatch, useSelector } from "react-redux";
import { setActiveUnit } from "../../redux/actions";

const TemperatureConversionButtons = () => {
  const dispatch = useDispatch();
  const activeUnit = useSelector((state) => state?.weather?.activeUnit);

  const handleSetActiveUnit = (unit) => {
    dispatch(setActiveUnit(unit));
  };

  return (
    <ButtonContainer>
      <TemperatureButton
        className={activeUnit === "C" ? "active" : ""}
        onClick={() => handleSetActiveUnit("C")}
      >
        °C
      </TemperatureButton>
      <span>|</span>
      <TemperatureButton
        className={activeUnit === "K" ? "active" : ""}
        onClick={() => handleSetActiveUnit("K")}
      >
        °K
      </TemperatureButton>
    </ButtonContainer>
  );
};

export default TemperatureConversionButtons;
