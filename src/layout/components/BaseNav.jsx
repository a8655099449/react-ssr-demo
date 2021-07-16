import React from 'react';
import { NavLink, Link } from 'umi';
import { Dropdown, Menu } from 'antd';

import styles from './BaseNav.less';

const navList = [
  {
    path: '/home',
    text: '首页',
  },
  {
    path: '/center',
    text: '中心概况',
    downMenu: [
      {
        text: '中心简介',
        path: '/center/',
      },
      {
        text: '历史沿革',
        path: '/center/history',
      },
      {
        text: '组织架构',
        path: '/center/framework',
      },
    ],
  },
  {
    path: '/science',
    text: '科学研究',
    downMenu: [
      {
        text: '四大研究方向',
        path: '/science/',
      },
      {
        text: '多研究项目',
        path: '/science',
      },
    ],
  },
  {
    path: '/education',
    text: '教育培养',
    downMenu: [
      {
        text: '学院教育',
        path: '/education',
      },
      {
        text: '继续教育',
        path: '/education',
      },
      {
        text: '导师风采',
        path: '/education',
      },
    ],
  },
  {
    path: '/net',
    text: '协同网络',
    downMenu: [
      {
        text: '成员名单',
        path: '/education',
      },
      {
        text: '合作课题',
        path: '/education',
      },
    ],
  },
  {
    path: '/support',
    text: '对口支持',
    downMenu: [
      {
        text: '支援边疆',
        path: '/support',
      },
      {
        text: '对口扶贫',
        path: '/support',
      },
    ],
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
            <Dropdown key={index} overlay={<NavMenu menu={item?.downMenu} />}>
              <NavLink
                to={item.path}
                className={`${styles['nav-item']}`}
                activeClassName={`${styles['active']}`}
              >
                {item.text}
              </NavLink>
            </Dropdown>
          ))}
        </nav>
      </div>
    </header>
  );
}

const NavMenu = ({ menu }) => {
  if (!menu || !Array.isArray(menu)) return null;

  return (
    <Menu
      style={{
        borderLeft: 'none',
      }}
    >
      {menu.map((item, index) => (
        <Menu.Item className={`${styles['menu-item']}`} key={index}>
          <Link to={item.path}>{item.text}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
