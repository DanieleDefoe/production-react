import '@/app/styles/index.scss';
import {
  getInitialTheme,
  I18nDecorator,
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator,
} from '@/shared/config';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      darkClass: 'dark',
      stylePreview: true,
      current: getInitialTheme(),
    },
  },
  tags: ['autodocs'],
  decorators: [StyleDecorator, ThemeDecorator, RouterDecorator, I18nDecorator],
};

export default preview;
