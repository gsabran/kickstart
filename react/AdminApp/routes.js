import AdminApp from './components/AdminApp';
import Dashboard from './components/Dashboard';

export default {
  component: AdminApp,
  childRoutes: [
    { path: 'dashboard', component: Dashboard }
  ]
};
