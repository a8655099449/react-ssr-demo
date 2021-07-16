import HomeRoutes from './routes/base';
interface Iroutes {
 
  path?: string;
  component?: string | (() => any);
  wrappers?: string[];
  redirect?: string;
  exact?: boolean;
  routes?: Iroutes[];
  text?: string;
  [k: string]: any;
}

const routes: Iroutes[] = [
  {
    path: '/',
    exact: false,
    component: '@/layout/BaseLayout',
    routes: HomeRoutes,
    // redirect: '/home',
  },
];

export { Iroutes };

export default routes;
