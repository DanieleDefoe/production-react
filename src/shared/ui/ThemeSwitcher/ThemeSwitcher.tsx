import { FC } from 'react';
import clsx from 'clsx';
import { useTheme } from '@/shared/hooks';
import { DarkTheme, LightTheme } from '@/shared/assets';
import { Theme } from '@/shared/config';
import { Button, ButtonTheme } from '../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={clsx(className)}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK && <DarkTheme />}
      {theme === Theme.LIGHT && <LightTheme />}
    </Button>
  );
};
