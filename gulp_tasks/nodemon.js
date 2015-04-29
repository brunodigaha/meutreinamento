//Task Nodemon
module.exports = function (gulp,plugins){
  return  function (cb) {
    var called = false;
    return plugins.nodemon({
      script: 'server.js',
      ext: 'js jade',
      ignore: [
        'gulpfile.js',
		'public/js/',
		'public/css',
        'gulp_tasks/',
        'node_modules/',
		'bower_components',
        'server/views/'
      ]
    })
    .on('start', function () {
      if (!called) {
        called = true;
        cb();
      }
    })
    .on('restart', function () {
      setTimeout(function () {
        plugins.browserSync.reload({ stream: false });
      }, 1300);
    });
  };
};