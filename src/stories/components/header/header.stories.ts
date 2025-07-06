import { Meta } from '@storybook/react';
import { Header } from './header';

const meta: Meta<typeof Header> = {
  title: 'HomeWork/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ShowedHeader = {};
