//Task validate js
module.exports = function (gulp,plugins,path){
	return function() {
		  gulp.src('./public/js/**/*.js')
		  .pipe(plugins.plumber())
		  .pipe(plugins.jsvalidate())
		  .on("error", plugins.notify.onError(function(error) {
        		return error.message;
       		}));

	};
};