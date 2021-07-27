Package.describe({
  "summary": 'Sikka - A Firewall for Meteor Apps',
  "name": "akarda:sikka2",
  "version": "1.0.3",
  "git": "https://github.com/Akarda/sikka2",
});

Npm.depends({
  "request": "2.53.0",
  "cookies": "0.5.0"
});

Package.onUse(function (api, where) {
  configure(api);
  api.export('Sikka', 'server')
});

Package.onTest(function (api, where) {
  configure(api);
  api.use('tinytest');
  api.use('random');
  api.use('practicalmeteor:sinon');

  api.addFiles([
    'test/server/utils.js',
    'test/server/config.js',
    'test/server/core.js',
    'test/server/session_hooks.js',
    'test/server/routes.js'
  ], 'server');
});

function configure (api) {
  api.versionsFrom('2.3.2')
  api.use([
    'mongo',
    'underscore',
    'akarda:meteorx@2.1.2',
    'meteorhacks:picker@1.0.3',
    'chuangbo:cookie@1.1.0'
  ]);

  api.addFiles([
    'lib/server/init.js',
    'lib/server/config.js',
    'lib/server/core.js',
    'lib/server/session_hooks.js',
    'lib/server/routes.js'
  ], 'server');

  api.addFiles([
    'lib/client/core.js'
  ], 'client');

  api.addFiles([
    'lib/server/captcha_page.html'
  ], 'server', { isAsset: true });
}
