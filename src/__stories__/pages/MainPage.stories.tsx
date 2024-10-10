import { MainPage } from '@/pages/MainPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/MainPage',
  component: MainPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
