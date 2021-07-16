import React from 'react';
import { NavLink } from 'umi';
import BaseNav from './components/BaseNav';
import Crumbs from './components/crumbs';
import Footer from './components/footer';
import RightTool from './components/rightTool';

export default function BaseLayout({ children }) {
  return (
    <>
      <BaseNav />
      <Crumbs />
      <main
        style={{
          minHeight: '80vh',
        }}
      >
        {children}
      </main>
      <RightTool />
      <Footer />
    </>
  );
}
