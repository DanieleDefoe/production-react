import { StoryFn } from '@storybook/react';
import clsx from 'clsx';
import { useCallback, useEffect, useState } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { getInitialTheme, Theme, ThemeContext } from '../theme/ThemeContext';

export const ThemeDecorator = (Story: StoryFn) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = useDarkMode();

  useEffect(() => {
    const newTheme = isDark ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={clsx('app', theme)}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
