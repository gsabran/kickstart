import TodoApp from './components/TodoApp';
import Main from './components/Main';

export default {
  path: '/',
  component: TodoApp,
  indexRoute: { component: Main },
  childRoutes: []
};
