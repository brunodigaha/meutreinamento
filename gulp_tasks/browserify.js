
// Task browserify to compile files js
module.exports = function (gulp,plugins){
	return function() {
		return plugins.browserify('./public/js/app/app.js',{
			debug:true 
			})
		.on("error", plugins.notify.onError(function(error) {
			return error.message;
		}))
		.bundle()
		.pipe(plugins.vinylSourceStream('./scripts.js'))
		.pipe(gulp.dest('public/js'));
	};
};
