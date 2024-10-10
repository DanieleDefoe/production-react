import { LangSwitcher } from '@/features/LangSwitcher';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'feature/LangSwitcher',
  component: LangSwitcher,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
