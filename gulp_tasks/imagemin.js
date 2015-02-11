// Task Imagemin - https://github.com/sindresorhus/gulp-imagemin
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() { gulp.src(path.imgdev)
        .pipe(plugins.watch(path.imgdev))
        .pipe(plugins.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(path.img));
	};
};