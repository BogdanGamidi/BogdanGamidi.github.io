import { Meta } from '@storybook/react';
import { ModalDialog } from './modal-dialog';

const meta: Meta<typeof ModalDialog> = {
  title: 'HomeWork/Modal',
  component: ModalDialog,
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: { type: 'select' },
      options: [true, false],
    },
  },
};

export default meta;

export const ShowedWithoutChildren = {
  args: {
    visible: true,
    children: '',
  },
};

export const ShowedWithNumberChildren = {
  args: {
    visible: true,
    children: 123,
  },
};

export const ShowedWithStringChildren = {
  args: {
    visible: true,
    children: 'Good Day',
  },
};

export const UnShowedWithoutChildren = {
  args: {
    visible: false,
    children: '',
  },
};