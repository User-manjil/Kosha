"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }

  return context;
}