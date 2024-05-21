import { createContext, useContext, useState } from "react";
import { CaracteristicsModel, ProviderProps } from "@/src/utils/types";

type PasswordContextType = {
  value: string;
  caracteristics: CaracteristicsModel;
  setValue: (value: string) => void;
  setCaracteristics: (caracteristics: CaracteristicsModel) => void;
};

export const PasswordContext = createContext<PasswordContextType | null>(null);

export const PasswordProvider = ({ children }: ProviderProps) => {
  const defaultCaracteristics: CaracteristicsModel = {
    length: 0,
    uppercase: false,
    lowercase: false,
    symbols: false,
    numbers: false,
    strength: 0,
  };
  const [value, setValue] = useState("P4$5W0rD!");
  const [caracteristics, setCaracteristics] = useState(defaultCaracteristics);

  return (
    <PasswordContext.Provider
      value={{
        value,
        setValue,
        caracteristics,
        setCaracteristics,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (!context)
    throw new Error("PasswordContext should be used within PasswordProvider");
  return context;
};
