//Task Move files To
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
		  gulp.src('./public/index-prod.jade')
		  .pipe(plugins.plumber())
		  .pipe(plugins.rename("index.jade"))
		  .pipe(gulp.dest(path.jade_dev_d))
		  .on("error", plugins.notify.onError(function(error) {
        		return error.message;
       		}));
	};
};