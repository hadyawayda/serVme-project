import { useState, createContext, Dispatch, SetStateAction } from "react";

type NameContextType = {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
};

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
