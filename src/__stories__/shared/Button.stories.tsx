import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui';

const meta = {
  title: 'shared/Button',
  argTypes: {
    size: {
      options: Object.values(ButtonSize),
    },
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};

export const Background: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};
