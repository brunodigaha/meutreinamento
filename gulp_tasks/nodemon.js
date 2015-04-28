//Task Nodemon
process.chdir('../meutreinamento');
module.exports = function (gulp,plugins,path){
  return  function (cb) {
    var called = false;
    return plugins.nodemon({
      script: 'server.js',
      ext: 'jade',
      ignore: [
        'gulpfile.js',
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
		console.log("======================Restart Nodemon================");
      setTimeout(function () {
        plugins.browserSync.reload({ stream: false });
      }, 1100);
    });
  };
};
