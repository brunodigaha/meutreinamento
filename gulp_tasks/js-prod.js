// Task build JS to production
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
		  gulp.src(path.index_dev_o)
		  .pipe(plugins.plumber())
		  .pipe(plugins.rename(function(path){path.basename+="-prod";}))
		    .pipe(plugins.jadeUsemin({
		      css: [ 'concat', plugins.rev()],
		      js: [ plugins.uglify(), plugins.rev()]
		    }))
		    .pipe(gulp.dest('./public'))
		    .on("error", plugins.notify.onError(function(error) {
        		return error.message;
       		}));

		};
};