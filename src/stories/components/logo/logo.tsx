import React from 'react';
import logo from './logo.png';
import './logo.css';

/**
 * Logo of main app
 */
export const Logo = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
};
