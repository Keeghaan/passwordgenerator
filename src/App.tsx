import { useEffect, useState } from "react";
import { CharacterLength } from "./components/CharacterLength";
import { CheckBox } from "./components/CheckBox";
import { GenerateButton } from "./components/GenerateButton";
import { Strength } from "./components/Strength";
import { usePasswordContext } from "./contexts/PasswordContext";
import "./styles.css";
import iconCopy from "@/src/images/icon-copy.svg";
import { Alert } from "./utils/Alert";

export default function App() {
  const { value, setValue } = usePasswordContext();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isDefaultPW, setIsDefaultPW] = useState(true);

  useEffect(() => {}, [value, error]);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => console.log("Text copied successfully"))
      .catch((err) => console.error("Failed to copy text: ", err));
    setCopied(true);
  };

  return (
    <div className="App">
      <div>
        <h1 className="title">Password Generator</h1>
        <div className="pw-output-container">
          <span className={`pw-value ${isDefaultPW ? "pw-default" : ""}`}>
            {value}
          </span>
          <span className="pw-copy">
            <span className="pw-copied">{copied ? "COPIED" : null}</span>
            <img
              className="pw-copy pw-logo"
              alt="copy-logo"
              src={iconCopy}
              onClick={handleCopy}
            />
          </span>
        </div>
        <div className="app-container">
          <CharacterLength />
          <span className="check-box-container">
            <CheckBox
              value={0}
              label="Include Uppercase Letters"
              error={error}
              setError={setError}
            />
            <CheckBox
              value={1}
              label="Include Lowercase Letters"
              error={error}
              setError={setError}
            />
            <CheckBox
              value={2}
              label="Include Numbers"
              error={error}
              setError={setError}
            />
            <CheckBox
              value={3}
              label="Include Symbols"
              error={error}
              setError={setError}
            />
          </span>
          <Strength />
          <GenerateButton
            error={error}
            setError={setError}
            setErrorMsg={setErrorMsg}
            value={value}
            setValue={setValue}
            isDefaultPW={isDefaultPW}
            setIsDefaultPW={setIsDefaultPW}
          />
          {error ? (
            <Alert msg={errorMsg} error={error} setError={setError} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
