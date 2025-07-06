import { Meta } from '@storybook/react';
import { TransactionFull } from './transaction-full';

const meta: Meta<typeof TransactionFull> = {
  title: 'HomeWork/TransactionFull',
  component: TransactionFull,
  tags: ['autodocs'],
};

export default meta;

export const TransactionOfBook = {
  args: {
    amount: -1500,
    category: 'Books',
    title: 'Payment book',
    description: "Harry Potter And The Philosopher's Stone",
    date: new Date(2025, 7, 6),
  },
};

export const TransactionOfCar = {
  args: {
    amount: -15000000,
    category: 'Cars',
    title: 'Payment car from China',
    description: 'Haval',
    date: new Date(2025, 7, 5),
  },
};
