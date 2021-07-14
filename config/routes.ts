interface Iroutes {
  /**
   * Any valid URL path
   */
  path?: string;
  /**
   * A React component to render only when the location matches.
   */
  component?: string | (() => any);
  wrappers?: string[];
  /**
   * navigate to a new location
   */
  redirect?: string;
  /**
   * When true, the active class/style will only be applied if the location is matched exactly.
   */
  exact?: boolean;
  routes?: Iroutes[];
  text?: string;
  [k: string]: any;
}

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
 
];

const routes: Iroutes[] = [
  {
    path: '/',
    exact: false,
    component: '@/layout/BaseLayout',
    routes: HomeRoutes,
    // redirect: '/home',
  },
];

export default routes;
