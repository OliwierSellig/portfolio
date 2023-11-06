import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [inDarkMode, setInDarkMode] = useState(false);

  useEffect(() => {
    if (inDarkMode) document.documentElement.classList.add("dark-mode");
    else document.documentElement.classList.remove("dark-mode");
  }, [inDarkMode]);

  return (
    <DarkModeContext.Provider value={{ inDarkMode, setInDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const value = useContext(DarkModeContext);
  if (value === undefined)
    throw new Error("DarkMode context was used outside of a provider");

  return value;
}

export { DarkModeProvider, useDarkMode };
