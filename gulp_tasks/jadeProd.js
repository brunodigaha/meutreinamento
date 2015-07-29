module.exports = function (gulp,plugins){
	return function() {
		gulp.src('public/index.jade')
		.pipe(plugins.jade({pretty: true}))
		.on("error", plugins.notify.onError(function(error) {
			return error.message;
		}))
		.pipe(gulp.dest('public'));
	};
};
