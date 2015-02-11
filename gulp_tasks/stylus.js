// Task Stylus - https://github.com/stevelacy/gulp-stylus
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
    gulp.src(path.stylus)
        .pipe(plugins.watch(path.stylus))
        .pipe(plugins.stylus({
            compress: true
        }))
        .pipe(gulp.dest(path.css));
	};
};
