
// Task browserify to compile files js
module.exports = function (gulp,plugins){

	function browserifyShare(){
		// you need to pass these three config option to browserify
		var b = plugins.browserify('./public/js/app/app.js',{
			cache: {},
			packageCache: {},
			fullPaths: true
		});
		b = plugins.watchify(b);
		b.on('update', function(){
			bundleShare(b);
		});
		b.on('log',plugins.util.log);
		b.on('time', function(time){plugins.util.log(plugins.util.colors.green('Browserify [watchify]'), plugins.util.colors.blue('in ' + time + ' ms'));});
		b.on('error',plugins.notify.onError(function(error) {
			return error.message;
		}));

		// b.add('./public/js/app/app.js');
		bundleShare(b);
	}

	function bundleShare(b) {
		b.bundle()
		.pipe(plugins.vinylSourceStream('./scripts.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(plugins.browserSync.reload({stream: true, once: true}));
	}


	return function() {
		browserifyShare();
		// return plugins.browserify('./public/js/app/app.js',{
		// 	debug:true 
		// 	})
		// .require(require.resolve('../public/bower_components/angular/angular.js'),{ expose: 'angular', dependes: null })
		// .on("error", plugins.notify.onError(function(error) {
		// 	return error.message;
		// }))
		// .bundle()
		// .pipe(plugins.vinylSourceStream('./scripts.js'))
		// .pipe(gulp.dest('public/js'));
	};
};
