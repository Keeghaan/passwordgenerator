import { useEffect, useState } from "react";
import { usePasswordContext } from "@/src/contexts/PasswordContext";
import { StrengthLevelModel } from "@/src/utils/types";
import { StrengthLevelBar } from "./StrengthLevelBar";

export const Strength = () => {
  const { caracteristics } = usePasswordContext();
  const [level, setLevel] = useState<StrengthLevelModel>(
    caracteristics.strength
  );

  useEffect(() => {
    if (!caracteristics.length) setLevel(0);
    else if (caracteristics.length < 8) setLevel(1);
    else setLevel(caracteristics.strength > 4 ? 4 : caracteristics.strength);
  }, [caracteristics]);

  return (
    <div className="strength-container">
      <span className="strength-text">STRENGTH</span>
      <div className={`strength-level ${!level ? "strength-level-none" : ""} `}>
        {level !== 0 ? StrengthLevelModel[level] : "(^-^)"}
        <StrengthLevelBar level={level} />
      </div>
    </div>
  );
};
