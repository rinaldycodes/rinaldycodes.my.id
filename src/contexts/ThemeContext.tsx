import React, { createContext } from 'react';

interface ThemeContextProps {
    theme: any;
    toggleTheme: () => void;
    isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

