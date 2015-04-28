//Clean builds prod
process.chdir('../meutreinamento');
module.exports = function (gulp,plugins,path){
	return function() {
		  gulp.src(['./server/views/index.jade','./public/index-prod.jade','public/css/build/*.css','public/js/build/*.js'],{read:false})
		  .pipe(plugins.clean());
	};
};