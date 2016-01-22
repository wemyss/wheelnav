Package.describe({
  name: 'swemyss:wheelnav',
  summary: 'Animate wheel navigation control based on RaphaelJS',
  version: '1.6.1',
  git: 'https://github.com/wemyss/wheelnav.git'
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");
  api.use(["meteor"]);

  api.addFiles([
  'lib/js/required/raphael.icons.js',
  'lib/js/required/raphael.js',
  'lib/js/dist/wheelnav.js'
  ], 'client');

  api.export('icon', 'client');
  api.export('Raphael', 'client');
  api.export('wheelnav', 'client');
  api.export('slicePath', 'client');
});
