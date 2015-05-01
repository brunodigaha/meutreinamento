
// Task browserify to compile files js
module.exports = function (gulp,plugins){
	return function() {
		return plugins.browserify('./public/js/app/app.js',{
			debug:true 
			})
		.bundle()
		.pipe(plugins.vinylSourceStream('./main.js'))
		.pipe(gulp.dest('public/js'))
		.on("error", plugins.notify.onError(function(error) {
			return error.message;
		}));
	};
};
