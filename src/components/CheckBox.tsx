import React, { useEffect, useState } from "react";
import { usePasswordContext } from "@/src/contexts/PasswordContext";

type CheckboxProps = {
  label: string;
  value: number;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CheckBox = ({ value, label, error, setError }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const [updated, setUpdated] = useState(false);
  const { caracteristics, setCaracteristics } = usePasswordContext();

  const handleStrength = () => {
    if (updated) {
      let newStrength = caracteristics.strength;
      if (checked) {
        newStrength++;
      } else if (newStrength > 0) newStrength--;
      setCaracteristics({ ...caracteristics, strength: newStrength });
      setUpdated(false);
    }
  };

  useEffect(() => {
    handleStrength();
  }, [updated]);

  useEffect(() => {
    switch (value) {
      case 0:
        setCaracteristics({ ...caracteristics, uppercase: checked });
        break;
      case 1:
        setCaracteristics({ ...caracteristics, lowercase: checked });
        break;
      case 2:
        setCaracteristics({ ...caracteristics, numbers: checked });
        break;
      case 3:
        setCaracteristics({ ...caracteristics, symbols: checked });
        break;
    }
    setUpdated(true);
    if (error) setError(false);
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox-container">
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {label}
      </label>
    </div>
  );
};
