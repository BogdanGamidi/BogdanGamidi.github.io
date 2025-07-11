import { Header } from '../header/header';
import React from 'react';
import './layout.css';

export const Layout = () => {
  return (
    <article className="layout">
      <Header />
      <section className="layout-content">Here may be a content</section>
    </article>
  );
};
