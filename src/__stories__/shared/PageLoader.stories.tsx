import { PageLoader } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
