"use client";

import { createContext , useContext, useState} from "react";

// type AppContextType = {
//   search: string;
//   setSearch: React.Dispatch<React.SetStateAction<string>>;
//   isMenuOpen: boolean;
//   setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };



export const AppContext = createContext({
  search: "",
  setSearch: () => {},
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});
