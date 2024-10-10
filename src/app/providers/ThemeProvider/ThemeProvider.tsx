import {
  getInitialTheme,
  type IThemeContext,
  saveTheme,
  Theme,
  ThemeContext,
} from '@/shared/config';
import {
  type FC,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

export const ThemeProvider: FC<
  PropsWithChildren & { initialTheme?: Theme }
> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme ?? getInitialTheme);

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
      }) satisfies IThemeContext,
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
