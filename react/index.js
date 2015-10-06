const rootRoute = {
  component: 'div',
  childRoutes: [
    require('./TodoApp'),
    require('./AdminApp')
  ]
};

let webpackStats;

if (Meteor.isServer) {
  try {
    webpackStats = JSON.parse(Assets.getText('webpack.stats.json'));
  } catch(e) {

  }
}

ReactRouterSSR.Run(rootRoute, {}, { webpackStats });
