import { useEffect, useState } from "react";
import { usePasswordContext } from "../../src/contexts/PasswordContext";

type SliderProps = {
  value: number;
};

export const Slider = ({ value }: SliderProps) => {
  const [currentValue, setCurrentValue] = useState(value || 0);
  const [strengthCheck, setStrengthCheck] = useState(false);
  const { caracteristics, setCaracteristics } = usePasswordContext();

  useEffect(() => {
    let newStrength = caracteristics.strength;
    if (currentValue !== caracteristics.length) {
      if (currentValue > 7) {
        if (!strengthCheck) {
          newStrength++;
          setStrengthCheck(true);
        }
      } else {
        if (newStrength > 0 && strengthCheck) {
          newStrength--;
          setStrengthCheck(false);
        }
      }
      setCaracteristics({
        ...caracteristics,
        length: currentValue,
        strength: newStrength,
      });
    }
  }, [currentValue]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setCurrentValue(newValue);
  };

  return (
    <input
      type="range"
      min={0}
      max={20}
      value={currentValue}
      onChange={handleChange}
    />
  );
};
