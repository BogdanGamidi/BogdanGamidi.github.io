import { Logo } from '../logo/logo';
import React from 'react';
import './header.css';

export const Header = () => {
  return (
    <header>
      <div className="header">
        <Logo />
        <h1>Main</h1>
      </div>
    </header>
  );
};
