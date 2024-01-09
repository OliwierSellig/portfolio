import { ReactNode, createContext, useContext, useState } from "react";
import { ScreenshotProp } from "../lib/types";

const ScreenshotContext = createContext<ContextType | undefined>(undefined);

interface ContextType {
  iterator: number;
  setIterator: React.Dispatch<React.SetStateAction<number>>;
  canGoPrev: () => boolean;
  goPrev: () => void;
  canGoNext: (list: ScreenshotProp[]) => boolean;
  goNext: (list: ScreenshotProp[]) => void;
}

function ScreenshotsProvider({ children }: { children: ReactNode }) {
  const [iterator, setIterator] = useState(0);

  function canGoNext(list: ScreenshotProp[]) {
    return iterator + 1 < list?.length;
  }

  function goNext(list: ScreenshotProp[]) {
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
