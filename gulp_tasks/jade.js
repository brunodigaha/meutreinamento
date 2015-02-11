// Task Jade - https://github.com/phated/gulp-jade

process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
	    gulp.src(path.jade)
	        .pipe(plugins.watch(path.jade))
	        .pipe(plugins.jade())
	        .pipe(gulp.dest(path.html));
	};
};
