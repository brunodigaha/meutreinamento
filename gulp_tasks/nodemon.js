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
		'public/css/',
		'public/images/',
		'public/bower_components/',
        'gulp_tasks/',
        'node_modules/',
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