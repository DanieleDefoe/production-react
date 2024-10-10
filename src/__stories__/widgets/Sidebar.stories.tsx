import { Sidebar } from '@/widgets/Sidebar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
