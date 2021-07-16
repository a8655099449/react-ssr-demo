import { Iroutes } from '../routes';
import centerRouter from './center';


const HomeRoutes: Iroutes[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: '@/pages/home/Home',
    desc: '首页',
  },
  {
    path: '/center',
    component: '@/pages/center/center',
    desc: '中心概况',
    routes:centerRouter,

  },
  {
    path: '/education',
    component: '@/pages/education/education',
    desc: '教育培养',
  },
  {
    path: '/net',
    component: '@/pages/net/net',
    desc: '协同网络',
  },
  {
    path: '/support',
    component: '@/pages/support/support',
    desc: '对口支持',
  },
  {
    path: '/public',
    component: '@/pages/public/public',
    desc: '公共服务',
  },
  {
    path: '/staff',
    component: '@/pages/staff/staff',
    desc: '职工成员',
  },
  {
    path: '/science',
    component: '@/pages//science//science',
    desc: '科学研究',
  },
 
];

export default HomeRoutes