import { usePasswordContext } from "../../src/contexts/PasswordContext";
import iconSubmit from "../../src/images/icon-arrow-right.svg";
import React, { useEffect } from "react";

type GenerateButtonProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: (value: string) => void;
  isDefaultPW: boolean;
  setIsDefaultPW: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GenerateButton = ({
  setError,
  setErrorMsg,
  value,
  setValue,
  isDefaultPW,
  setIsDefaultPW,
}: GenerateButtonProps) => {
  const { caracteristics } = usePasswordContext();

  useEffect(() => {}, [value]);

  const generatePassword = () => {
    const characterSets = [
      { name: "uppercase", value: "QWERTYUIOPASDFGHJKLZXCVBNM" },
      { name: "lowercase", value: "azertyuiopqsdfghjklmwxcvbn" },
      { name: "numbers", value: "0123456789" },
      { name: "symbols", value: `@#$%^&*()_-+={}[]|\:;"'<>,.?/~` },
    ];
    const characters: string[] = [];
    let password = "";
    let j = 0;
    characterSets.forEach((set) => {
      if (caracteristics[set.name]) {
        while (set.value[j]) characters.push(set.value[j++]);
        j = 0;
      }
    });
    let restrictions = 0;
    for (let car in caracteristics) {
      if (car !== "strength" && car !== "length") {
        if (caracteristics[car]) restrictions++;
      }
    }
    if (caracteristics.length < restrictions || !characters.length) {
      if (!caracteristics.length)
        setErrorMsg("A 0 length password cannot be generated.");
      else if (!characters.length)
        setErrorMsg("At least one restriction expected.");
      else if (restrictions > caracteristics.length)
        setErrorMsg(
          `Cannot include all the restrictions in a less than ${caracteristics.length} letters password.`,
        );
      setError(true);
    } else {
      if (characters.length) {
        for (let i = 0; i < caracteristics.length; i++) {
          const index = Math.floor(Math.random() * characters.length);
          password += characters[index];
        }
        setValue(password);
        setError(false);
        if (isDefaultPW) setIsDefaultPW(false);
      }
    }
  };

  const handleClick = () => {
    generatePassword();
  };

  return (
    <div>
      <button className="generate-button" onClick={handleClick}>
        <span className="generate-text-container">
          <span className="generate-text">GENERATE</span>
          <span>
            <img src={iconSubmit} />
          </span>
        </span>
      </button>
    </div>
  );
};
