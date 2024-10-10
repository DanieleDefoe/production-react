import { PageError } from '@/widgets/PageError';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'widget/PageError',
  component: PageError,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
