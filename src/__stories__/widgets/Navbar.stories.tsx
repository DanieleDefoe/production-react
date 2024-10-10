import { Navbar } from '@/widgets/Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
