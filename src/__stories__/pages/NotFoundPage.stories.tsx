import { NotFoundPage } from '@/pages/NotFoundPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
