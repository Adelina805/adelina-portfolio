"use client";

import React, { createContext, useContext } from "react";

type ThemeContextValue = {
  dark: boolean;
  toggleDark: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeContext.Provider");
  }
  return ctx;
}

export default ThemeContext;