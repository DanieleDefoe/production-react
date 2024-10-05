import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContext {
  theme?: Theme;
  toggleTheme?: VoidFunction;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const getInitialTheme = (): Theme => {
  return <Theme>localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? Theme.LIGHT;
};

export const saveTheme = (theme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
};
