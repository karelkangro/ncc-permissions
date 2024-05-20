import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode
} from 'react';

// Creating our Theme context
const ThemeContext = createContext(
  {
    theme: 'light',
    toggleTheme: () => { },
  },
);

export const useTheme = () => useContext(ThemeContext);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    const selectedTheme =
      window?.matchMedia('(prefers-color-scheme: dark)')?.matches
        ? 'dark'
        : 'light';
    return selectedTheme;
  });

  const toggleTheme = () => {
    setTheme((previousTheme) =>
      previousTheme === 'light' ? 'dark' : 'light'
    );
  };

  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};