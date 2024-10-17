import type { Meta, StoryObj } from '@storybook/react';

import { useModal } from '@/shared/hooks';
import { Button, Modal, ModalProps } from '@/shared/ui';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  args: { children: 'Modal' },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (props: ModalProps) => {
  const { onOpen, onClose, isOpen } = useModal();

  return (
    <div>
      <Button onClick={onOpen}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose} {...props}>
        <Button onClick={onClose}>Close modal</Button>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: Template,
};

export const Open: Story = {
  render: () => {
    return <Template isOpen />;
  },
};
