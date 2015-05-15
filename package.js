Package.describe({
  name: 'doedel:wheelnav',
  summary: 'Animate wheel navigation control based on RaphaelJS',
  version: '1.5.4',
  git: 'https://github.com/udiedrichsen/wheelnav.git'
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
  'lib/css/index.css',
  'lib/js/required/raphael.icons.js',
  'lib/js/required/raphael.js',
  'lib/js/dist/wheelnav.js'
  ], 'client');

  api.export('icon', 'client');
  api.export('Raphael', 'client');
  api.export('wheelnav', 'client');
});
