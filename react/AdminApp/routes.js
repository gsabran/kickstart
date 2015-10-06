import AdminApp from './components/AdminApp';
import Dashboard from './components/Dashboard';

export default {
  path: '/admin',
  component: AdminApp,
  indexRoute: { component: Dashboard },
  childRoutes: []
};
