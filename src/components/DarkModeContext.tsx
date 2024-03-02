import { type ReactNode, createContext, useContext, useEffect } from "react";
import usePersistantState from "../hooks";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isShuffleOn: boolean;
  toggleShuffle: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

interface DarkModeProviderProps {
  children: ReactNode;
}

function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = usePersistantState<boolean>(
    "IS_DARK_MODE",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isShuffleOn, setIsShuffleOn] = usePersistantState<boolean>(
    "IS_SHUFFLE_ON",
    true
  );

  useEffect(() => {
    if (localStorage.getItem("IS_DARK_MODE") === "true") {
      document.body.setAttribute("data-bs-theme", "dark");
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.removeAttribute("data-bs-theme");
      document.body.classList.remove("bg-dark", "text-light");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function toggleShuffle() {
    setIsShuffleOn(!isShuffleOn);
  }

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        isShuffleOn,
        toggleShuffle,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode(): DarkModeContextType {
  const context = useContext(DarkModeContext)!;
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
