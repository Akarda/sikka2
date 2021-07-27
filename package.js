Package.describe({
  "summary": 'Sikka - A Firewall for Meteor Apps',
  "name": "akarda:sikka2",
  "version": "1.0.4",
  "git": "https://github.com/Akarda/sikka2",
});

Npm.depends({
  "cookies": "0.8.0"
});

Package.onUse(function (api, where) {
  configure(api);
  api.export('Sikka', 'server')
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
