module.exports = function (gulp,plugins){
	return function() {
		gulp.src('public/js/app/**/*.jade',{base:'./'})
		.pipe(plugins.jade({pretty: true}))
		.on("error", plugins.notify.onError(function(error) {
			return error.message;
		}))
		.pipe(gulp.dest('./'));
	};
};
