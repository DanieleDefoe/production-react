import {
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  getInitialTheme,
  type IThemeContext,
  LOCAL_STORAGE_THEME_KEY,
  saveTheme,
  Theme,
  ThemeContext,
} from './ThemeContext';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    saveTheme(newTheme);
  }, [theme]);

  const setThemeCallback = useCallback((theme: Theme) => {
    setTheme(theme);
    saveTheme(theme);
  }, []);

  const value = useMemo(
    () =>
      ({
        theme,
        toggleTheme,
        setTheme: setThemeCallback,
      } satisfies IThemeContext),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
