import React from 'react';
import { NavLink } from 'umi';

export default function BaseLayout({ children }) {
  return (
    <div>
      <h1>BaseLayout </h1>
      <Nav />
      {children}
      <footer>footer</footer>
    </div>
  );
}

const navList = [
  {
    path: '/home',
    text: '首页',
  },
  {
    path: '/shop',
    text: '商品',
  },
  {
    path: '/profile',
    text: '个人中心',
  },
];

const Nav = props => {
  let { item } = props;
  return (
    <div>
      {navList.map((item, index) => (
        <NavLink to={item.path} key={index}>
          {item.text}
        </NavLink>
      ))}

    </div>
  );
};
