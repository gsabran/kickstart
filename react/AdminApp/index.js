// Replace 'admin' by your chunk name

// This ensure the admin is not bundled with the app on the client
// The script will be loaded only when needed
export default {
  path: 'admin',
  indexRoute: {
    onEnter: function (nextState, replaceState) {
      replaceState(null, '/admin/dashboard');
    }
  },
  getChildRoutes(location, cb) {
    if (Meteor.isClient) {
      require.ensure([], require => {
        cb(null, require('./routes'))
      }, 'admin');
    } else {
      global.__CHUNK_COLLECTOR__.push('admin')
      cb(null, require('./routes'));
    }
  }
};;
