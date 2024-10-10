import { AboutPage } from '@/pages/AboutPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
