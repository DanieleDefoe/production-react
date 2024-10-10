import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'feature/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
