import { createContext, useContext, useState } from "react";

const ScreenshotContext = createContext();

function ScreenshotsProvider({ children }) {
  const [iterator, setIterator] = useState(0);

  function canGoNext(list = []) {
    return iterator + 1 < list?.length;
  }

  function goNext(list) {
    if (canGoNext(list)) setIterator((prev) => prev + 1);
  }

  function canGoPrev() {
    return iterator > 0;
  }

  function goPrev() {
    if (canGoPrev()) setIterator((prev) => prev - 1);
  }

  return (
    <ScreenshotContext.Provider
      value={{ iterator, setIterator, canGoPrev, goPrev, canGoNext, goNext }}
    >
      {children}
    </ScreenshotContext.Provider>
  );
}

function useScreenshots() {
  const value = useContext(ScreenshotContext);
  if (value === undefined)
    throw new Error("Screenshot context was used outside of a provider");

  return value;
}

export { ScreenshotsProvider, useScreenshots };
