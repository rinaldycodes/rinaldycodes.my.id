import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { darkOrangeColors, lightOrangeColors } from '../utils/MyColors';

interface ThemeProviderProps {
    children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load initial theme preference from localStorage or system settings
    useEffect(() => {
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // setIsDarkMode(prefersDark);
    }, []);

    // Function to toggle theme manually
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: isDarkMode ? darkOrangeColors.colors : lightOrangeColors.colors,
                isDarkMode,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
