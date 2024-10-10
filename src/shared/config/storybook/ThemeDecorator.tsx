import { StoryFn } from '@storybook/react';
import clsx from 'clsx';
import { useDarkMode } from 'storybook-dark-mode';
import { Theme } from '../theme/ThemeContext';

export const ThemeDecorator = () =>
  function Decorator(Story: StoryFn) {
    const isDark = useDarkMode();

    const theme: Theme = isDark ? Theme.DARK : Theme.LIGHT;

    return (
      <div className={clsx('app', theme)}>
        <Story />
      </div>
    );
  };
