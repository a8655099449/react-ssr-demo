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
  },
  {
    path: '/profile',
    component: '@/pages/profile/Profile',
  },
  {
    path: '/shop',
    component: '@/pages/shop/Shop',
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
