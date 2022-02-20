import { createContext, useEffect, FC, useState } from 'react';
import { darkTheme } from '../stitches.config';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    if (userMedia.matches) {
      // default is dark
      return darkTheme;
    }
  }
  return 'default-theme';
};

export type ThemeContent = {
  theme: string;
  setTheme: (c: string) => void;
};

export type ProviderContent = {
  initialTheme?: string;
};

export const ThemeContext = createContext<ThemeContent>({
  theme: getInitialTheme(),
  setTheme: () => {},
});

export const ThemeProvider: FC<ProviderContent> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    if (rawTheme) {
      document.body.classList.remove(darkTheme, 'default-theme');
    }

    document.body.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
