import React from 'react';
import { NavLink } from 'umi';
import BaseNav from './components/BaseNav';
import Crumbs from './components/crumbs';

export default function BaseLayout({ children }) {
  return (
    <div>
      <BaseNav />
      {/* <Crumbs /> */}
      {children}
      <footer>footer</footer>
    </div>
  );
}
