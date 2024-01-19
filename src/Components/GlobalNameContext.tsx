import { useState, createContext } from "react";
import { NameContextType } from "../Interfaces/Interfaces";

export const NameContext = createContext<NameContextType>({
  firstName: "",
  setFirstName: () => {},
});

export const NameProvider = ({ children }: { children: React.ReactNode }) => {
  const [firstName, setFirstName] = useState("");

  return (
    <NameContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </NameContext.Provider>
  );
};
