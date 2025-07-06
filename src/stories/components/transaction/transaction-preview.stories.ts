import { Meta } from '@storybook/react';
import { TransactionPreview } from './transaction-preview';

const meta: Meta<typeof TransactionPreview> = {
  title: 'HomeWork/TransactionPreview',
  component: TransactionPreview,
  tags: ['autodocs'],
};

export default meta;

export const TransactionOfBook = {
  args: {
    amount: -1500,
    category: 'Books',
    title: 'Payment book',
    description: "Harry Potter And The Philosopher's Stone",
  },
};

export const TransactionOfCar = {
  args: {
    amount: -15000000,
    category: 'Cars',
    title: 'Payment car from China',
    description: 'Haval',
  },
};
