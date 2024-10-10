import { DarkTheme, LightTheme } from '@/shared/assets';
import { Theme } from '@/shared/config';
import { useTheme } from '@/shared/hooks';
import { Button, ButtonTheme } from '@/shared/ui';
import clsx from 'clsx';
import { type FC } from 'react';

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
      {theme === Theme.LIGHT ? <LightTheme /> : <DarkTheme />}
    </Button>
  );
};
