import { LangSwitcher } from '@/features/LangSwitcher';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'feature/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    short: {
      options: [true, false],
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
