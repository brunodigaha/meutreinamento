// Task Stylus - https://github.com/stevelacy/gulp-stylus
module.exports = function (gulp,plugins){
	return function() {
		gulp.src('public/css/stylus/index.styl')
		.pipe(plugins.stylus({
			'compress': false
		}))
		.pipe(plugins.rename('styles.css'))
		.pipe(gulp.dest('public/css'))
		.on("error", plugins.notify.onError(function(error) {
			return error.message;
		}));
	};
};
