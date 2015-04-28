//Task BrowserSync
process.chdir('../meutreinamento');
module.exports = function (gulp,plugins,path){
	return function() {
	    plugins.browserSync.init(null, {
	        proxy: "http://localhost:3000",
	        files: path.build,
	        port: 5000,
	        notify: true
	    });
	};
};
