Package.describe({
  name: 'doedel:wheelnav',
  summary: 'Animated javascript navigation component based on Raphaël.js (SVG/VML). It can be a pie menu (radial menu, circular menu) and many more.',
  version: '1.5.2',
  git: 'https://github.com/udiedrichsen/wheelnav.git'
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
  'css/index.css',
  'js/required/raphael.icons.js',
  'js/required/raphael.js',
  'js/dist/wheelnav.js'
  ], 'client');

  api.export('icon', 'client');
  api.export('Raphael', 'client');
  api.export('wheelnav', 'client');
});
