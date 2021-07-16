import { Iroutes } from '../routes';
const centerRouter: Iroutes[] = [
  {
    path: '/center',
    redirect: '/center/synopsis',
  },
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
];

export default centerRouter;
