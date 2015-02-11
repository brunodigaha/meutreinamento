// Task Concat and Uglify JS - https://github.com/wearefractal/gulp-concat | https://github.com/terinjokes/gulp-uglify
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
		gulp.src(path.jsdev)
        .pipe(plugins.sourcemaps.init())
            .pipe(plugins.plumber())
            .pipe(plugins.concat('main.js'))
            .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(path.js));
	};
};

