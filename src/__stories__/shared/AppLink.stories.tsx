import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from '@/shared/ui';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  args: { to: '/', children: 'App Link' },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};
