import { usePasswordContext } from "../../src/contexts/PasswordContext";
import iconSubmit from "../../src/images/icon-arrow-right.svg";
import React, { useEffect } from "react";

type GenerateButtonProps = {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: (value: string) => void;
  isDefaultPW: boolean;
  setIsDefaultPW: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GenerateButton = ({
  error,
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
    if (caracteristics.length < 8 || !characters.length) {
      setErrorMsg(
        "To be generated, the password need a length of 8 minimum and at least one restriction.",
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
