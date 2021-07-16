import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Breadcrumb } from 'antd';
import routes from '../../../config/routes';
import { cloneDeep } from 'lodash';

let list = [
  {
    path: '/',
    exact: false,
    component: '@/layout/BaseLayout',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: '@/pages/home/Home', desc: '首页' },
      {
        path: '/center',
        component: '@/pages/center/center',
        desc: '中心概况',
        routes: [
          { path: '/center', redirect: '/center/synopsis' },
          {
            path: '/center/synopsis',
            component: '@/pages/center/children/synopsis',
            desc: '中心简介',
          },
          {
            path: '/center/history',
            component: '@/pages/center/children/history',
            desc: '历史简介',
          },
          {
            path: '/center/framework',
            component: '@/pages/center/children/framework',
            desc: '组织架构',
          },
        ],
      },
      {
        path: '/education',
        component: '@/pages/education/education',
        desc: '教育培养',
      },
      { path: '/net', component: '@/pages/net/net', desc: '协同网络' },
      {
        path: '/support',
        component: '@/pages/support/support',
        desc: '对口支持',
      },
      { path: '/public', component: '@/pages/public/public', desc: '公共服务' },
      { path: '/staff', component: '@/pages/staff/staff', desc: '职工成员' },
      {
        path: '/science',
        component: '@/pages//science//science',
        desc: '科学研究',
      },
    ],
  },
];

export default function Crumbs() {
  const history = useHistory();

  useEffect(() => {
    history.listen((localtion, act) => {
      // console.log('👴2021-07-16 15:56:21 crumbs.jsx line:14', a, b);
      let c = findPathName(localtion.pathname, cloneDeep(routes[0].routes));
      console.log('👴2021-07-16 17:51:51 crumbs.jsx line:67', c);
    });
  }, []);
  const findPathName = (pathname, routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (pathname.indexOf(routes[i].path) === -1 || routes[i].redirect) {
        routes.splice(i, 1);
        i--;
      }
    }

    if (routes[0] && routes[0].routes) {
      routes[0].routes = [findPathName(pathname, cloneDeep(routes[0].routes))];
    }

    return routes[0];
  };

  const haveRoute = (pathname, list) => {
    let item = list.find(r => r.path === pathname) !== -1;
    return item || false;
  };

  return <div className="container">您现在的位置</div>;
}
