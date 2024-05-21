import { usePasswordContext } from "@/src/contexts/PasswordContext";
import { Slider } from "./Slider";

export const CharacterLength = () => {
  const { caracteristics } = usePasswordContext();

  return (
    <>
      <div className="character-length-container">
        <span className="length-title">Character Length</span>
        <span className="length-length">{caracteristics.length}</span>
      </div>
      <div className="slider-container">
        <Slider value={caracteristics.length} />
      </div>
    </>
  );
};
