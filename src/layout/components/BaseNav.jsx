import React from 'react';
import { NavLink } from 'umi';

import styles from './BaseNav.less';

const navList = [
  {
    path: '/home',
    text: '首页',
  },
  {
    path: '/center',
    text: '中心概况',
  },
  {
    path: '/science',
    text: '科学研究',
  },
  {
    path: '/education',
    text: '教育培养',
  },
  {
    path: '/net',
    text: '协同网络',
  },
  {
    path: '/support',
    text: '对口支持',
  },
  {
    path: '/public',
    text: '公共服务',
  },
  {
    path: '/staff',
    text: '职工成员',
  },
];

export default function BaseNav() {
  return (
    <header className={`${styles['main-head']}  border-b-1`}>
      <div className="flex container">
        <div className={`${styles['logo']} flex`}>
          <div>
            <img src={require('../../assets/images/logo.png')} alt="" />
          </div>
          <div className={`${styles['r-text']}`}>
            <div className="mb-1">中南大学湘雅二医院 </div>
            <div>国家精神心理疾病临床研究中心</div>
          </div>
        </div>

        <nav>
          {navList.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={`${styles['nav-item']}`}
              activeClassName={`${styles['active']}`}
            >
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
