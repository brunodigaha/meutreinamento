//Task Nodemon
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
  return  function (cb) {
    var called = false;
    return plugins.nodemon({
      script: 'server.js',
      ext: 'js jade html',
      ignore: [
        'gulpfile.js',
        'assets.js',
        'gulp_tasks/',
        'node_modules/',
        'public/',
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
      }, 1000);
    });
  };
};
