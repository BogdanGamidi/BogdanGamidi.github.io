import { TransactionPreviewProps } from './transaction-preview';
import React from 'react';
import './transaction.css';

type TransactionFullProps = TransactionPreviewProps & {
  /**
   * Date of payment
   */
  date: Date;
  /**
   * Edit payment
   */
  edit: () => void;
};

export const TransactionFull = (props: TransactionFullProps) => {
  const { amount, category, title, description, date, edit } = props;

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Сумма операций</th>
          <th>Название категории</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Дата операции</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{amount}</td>
          <td>{category}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{date.toLocaleDateString()}</td>
          <td>
            <button onClick={edit}>Редактировать</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
