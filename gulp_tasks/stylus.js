// Task Stylus - https://github.com/stevelacy/gulp-stylus
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
    gulp.src(path.stylus_o)
        .pipe(plugins.watch(path.stylus_o))
        .pipe(plugins.stylus({
            compress: false
        }))
        .pipe(gulp.dest(path.stylus_dev_d));
	};
};
