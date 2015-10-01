// Inject the script tag for the hot reload in development
if (Meteor.settings.public.webpackDevServer) {
  Meteor.startup(function() {
    var scriptEl = document.createElement('script');
    scriptEl.src = 'http://localhost:3500/assets/main.js';
    document.body.appendChild(scriptEl);
  });
}
