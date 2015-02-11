//Task Move files To
process.chdir('../vittapro');
module.exports = function (gulp,plugins,path){
	return function() {
		  gulp.src('src/templates/back/*.jade')
		  .pipe(plugins.watch('src/templates/back/*.jade'))
		  .pipe(gulp.dest('server/views/'));
	};
};