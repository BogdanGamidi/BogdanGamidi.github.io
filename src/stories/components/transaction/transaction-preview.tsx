import React from 'react';
import './transaction.css';

export type TransactionPreviewProps = {
  /**
   * Amount of payment
   */
  amount: number;
  /**
   * Category of payment
   */
  category: string;
  /**
   * Title of payment
   */
  title: string;
  /**
   * Description of payment
   */
  description: string;
};

export const TransactionPreview = (props: TransactionPreviewProps) => {
  const { amount, category, title, description } = props;

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Сумма операций</th>
          <th>Название категории</th>
          <th>Название</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{amount}</td>
          <td>{category}</td>
          <td>{title}</td>
          <td>{description}</td>
        </tr>
      </tbody>
    </table>
  );
};
